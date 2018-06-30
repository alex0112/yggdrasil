class TreesController < ApplicationController
  before_action :set_tree, only: [:show, :update, :destroy]

  # GET /trees
  def index
    @trees = Tree.all

    render json: @trees
  end

  # GET /trees/:uri
  def show
    render json: @tree
  end

  # POST /trees
  def create
    @tree = Tree.new(tree_params)

    if @tree.save
      render json: @tree, status: :created, location: @tree
    else
      render json: @tree.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trees/1
  def update
    if @tree.update(tree_params)
      render json: @tree
    else
      render json: @tree.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trees/1
  def destroy
    @tree.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tree
      @tree = Tree
                .where(:root_uri => params[:root_uri])
                .first_or_create(:root_uri => params[:root_uri])
    end

    # Only allow a trusted parameter "white list" through.
    def tree_params
      params.require(:tree).permit(:name, :data, :root_uri)
    end
end
