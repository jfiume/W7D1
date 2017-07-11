class Api::TodoosController < ApplicationController
  def show
    render json: Todoo.find(params[:id])
  end

  def index
    render json: Todoo.all
  end

  def create
    @todoo = Todoo.new(todoo_params)
    if @todoo.save
      render json: @todoo
    else
      render json: @todoo.errors.full_messages, status: 422
    end
  end

  def update
    @todoo = Todoo.find(params[:id])
    if @todoo.update_attributes(todoo_params)
      render json: @todoo
    else
      render json: @todoo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todoo = Todoo.find(params[:id])
    if @todoo.destroy
      render json: @todoo
    else
      render json: @todoo.errors.full_messages, status: 422
    end
  end

  private

  def todoo_params
    params.require(:todoo).permit(:title, :body, :done)
  end
end
