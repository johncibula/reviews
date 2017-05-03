class PostsController < ApplicationController
  attr_accessor :sent_posts, :users

  def index
    begin 
      @sent = {
        "type" => "sent",
        "reviews" => current_user.sent_posts,
        "members" => User.all_except(current_user)
       }
      @recieved = {
        "type" => "recieved",
        "reviews" => current_user.received_posts,
        "members" => User.all_except(current_user)
      }
    rescue
      @sent = {}
      @recieved = {}
      @members = Post.new
    end
  end

  def new
    @post = Post.new
    @users = User.all_except(current_user)
    @users = instance_to_hash(users)
  end

  def create
    @post = Post.new(post_params)
    @post.sender_id = current_user.id
    if @post.save
      flash[:notice] = "Successfully created post"
        render json:{status: :true}
    else
      flash[:alert] = "Error creating new post!"
      render 'new'
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post= Post.find(params[:id])
    if @post.update(post_params)
      render json: { status: :true }
    else
      render 'edit'
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy!
      flash[:notice] = "Successfully deleted post!"
       redirect_to root_path
    else
      flash[:alert] = "Errors deleting post!"
      render 'destroy'
    end
  end

  private

  def post_params
     params.require(:post).permit(:recipient_id, :admin_message, :willing_to_work, :rating, :content)
  end

  def find_post
    @post = Post.find_by_id(params[:id])
  end

  def check_post_count
    if @received_posts == nil
      @check_number = 1
    else
      @check_number = 0
    end
  end

  def instance_to_hash(instance_variable)
    hash = {}
    instance_variable.each do |instance|
      hash[instance.id] = instance
    end
    hash
  end

  def show_new_form

  end

end
