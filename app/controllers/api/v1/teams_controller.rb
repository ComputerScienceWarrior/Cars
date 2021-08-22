module Api
    module V1
        class TeamsController < ApplicationController
            before_action :find_team, to: [:show, :update, :destroy]

            def index
                @teams = Team.all
                render json: @teams
            end

            def show
                render json: @team
            end

            def create
                if @team.save(team_params)
                    render json: @team
                else
                    render json: { error: @team.errors.messages }, status: 422
                end
            end

            def update
                if @team.update(team_params)
                    render json: @team
                else
                    render json: { error: @course.errors.messages }, status: 422
                end
            end

            def destroy
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

            def find_team
                @team = Team.find(params[:id])
            end
        end
    end
end