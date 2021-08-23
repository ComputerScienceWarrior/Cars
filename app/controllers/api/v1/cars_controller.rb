module Api
    module V1
        class CarsController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                @cars = Car.all
                render json: @cars
            end

            def show
                @car = Car.find(params[:id])
                render json: @car
            end

            def create
                if @car.save(car_params)
                    render json: @car
                else
                    render json: { error: @car.errors.messages }, status: 422
                end
            end

            def update
                @car = Car.find(params[:id])
                if @car.update(car_params)
                    render json: @car
                else
                    render json: { error: @car.errors.messages }, status: 422
                end
            end

            def destroy
                @car = Car.find(params[:id])
                if @car.destroy
                    head :no_content
                else
                    render json: { error: @car.errors.messages }, status: 422
                end
            end

            private 

            def car_params
                params.require(:car).permit(:name, :wins, :losses, :attack_power, :speed, :level, :rank, :team_id)
            end
        end
    end
end