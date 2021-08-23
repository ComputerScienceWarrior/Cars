module Api
    module V1
        class TeamsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                @teams = Team.all
                render json: @teams, include: :cars
            end

            def show
                @team = Team.find(params[:id])
                render json: @team, include: :cars
            end

            def create
                @team = Team.new(team_params)
                if @team.save
                    render json: @team
                else
                    render json: { error: @team.errors.messages }, status: 422
                end
            end

            def update
                @team = Team.find(params[:id])
                if @team.update(team_params)
                    render json: @team, include: :cars
                else
                    render json: { error: @course.errors.messages }, status: 422
                end
            end

            def destroy
                @team = Team.find(params[:id])
                if @team.destroy
                    head :no_content
                else
                    render json: { error: @course.errors.messages }, status: 422
                end
            end

            private 

            def team_params
                params.require(:team).permit(:name, :total_wins, :trophies, cars_attributes: [:name, :wins, :losses, :attack_power, :rank, :speed, :level])
            end
        end
    end
end