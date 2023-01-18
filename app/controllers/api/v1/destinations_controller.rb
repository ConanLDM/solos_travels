class Api::V1::DestinationsController < ApplicationController
  before_action :set_destination, only: %i[show destroy]

  def index
    destination = Destination.all.order(created_at: :desc)
    render json: destination
  end

  def create
    destination = Destination.create!(destination_params)
    if destination
      render json: destination
    else
      render json: destination.errors
    end
  end

  def show
    render json: @destination
  end

  def destroy
    @destination&.destroy
    render json: { message: 'Destination has been deleted!' }
  end

  private

  def destination_params
    params.permit(:name, :image, :details, :instruction)
  end

  def set_destination
    @destination = Destination.find(params[:id])
  end
end
