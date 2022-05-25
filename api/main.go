package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"

	"github.com/go-playground/validator"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

//go:embed frontend-build
var embeddedFiles embed.FS

func (cv *CustomValidator) Validate(i interface{}) error {
	return cv.validator.Struct(i)
}

func main() {
	fmt.Println("Starting Server")

	e := echo.New()
	e.Debug = true
	e.Logger.SetLevel(0)
	e.Validator = &CustomValidator{validator: validator.New()}

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowHeaders:     []string{"authorization", "Content-Type"},
		AllowCredentials: true,
		AllowMethods:     []string{echo.OPTIONS, echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	e.GET("/*", echo.WrapHandler(http.StripPrefix("/", http.FileServer(getFileSystem()))))
	e.POST("/auth/joinWorkspace", func(c echo.Context) (err error) {
		u := new(AuthRequest)
		if err = c.Bind(u); err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, err.Error())
		}
		if err := c.Validate(u); err != nil {
			return err
		}

		return c.JSON(http.StatusOK, &AuthResponse{
			AccessToken: u.Workspace,
			User:        IUser{},
		})
	})
	e.Logger.Fatal(e.Start(":9000"))
}

func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(embeddedFiles, "frontend-build")
	if err != nil {
		panic(err)
	}

	return http.FS(fsys)
}
