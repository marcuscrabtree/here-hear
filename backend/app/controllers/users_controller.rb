class UsersController < ApplicationController
    before_action :authorized, only: [:show, :update]

    def index
      users = User.all
      render json: users
    end

    def show
      if @current_user
          render json: @current_user,  status: :ok
      else
          render json: {error: "No current user!"}, status: :unauthorized
      end
    end

    def login #for /login
      #find by username from body
      @user = User.find_by(username: params[:username])
      #check if user exists and password matches password digest
      if (@user && @user.authenticate(params[:password]))
          #create token for front end
          token = JWT.encode({user_id: @user.id}, 'token')
          #pass user instance and token to front end
          render json: {user: @user, token: token}
      else
          render json: {error: "Invalid username or password"}, status: :unauthorized
      end
    end

    def create #for /signup
      @user = User.create!(username: params[:username], password: params[:password], password_confirmation: params[:password_confirmation])
      if @user
        token = JWT.encode({user_id: @user.id}, 'token')
        render json: {user: @user, token: token}
      else
        render json: {error: "Unable to create user"}, status: :bad_request
      end
    end

    def update
      @user.update(user_params)
      render json: @user
    end

    def destroy
      # @user = User.find_by(id: params[:user_id])
      @user.destroy
      render json: @user
    end

    def get_user_albums
      user = User.find(params[:id])
      render json: user.albums
    end

    def add_album_to_collection
      user = User.find(params[:id])
      album = Album.find(params[:album_id])
      user.albums << album
      render json: user.albums
    end

    private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end