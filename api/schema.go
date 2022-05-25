package main

import (
	"time"

	"github.com/go-playground/validator"
)

type CustomValidator struct {
	validator *validator.Validate
}

type AuthResponse struct {
	Time         time.Time `json:"time"`
	AccessToken  string    `json:"accessToken"`
	RefreshToken string    `json:"refreshToken"`
	User         IUser     `json:"user"`
}

type AuthRequest struct {
	Workspace string `json:"workspace" validate:"required"`
}

type IUser struct {
}
