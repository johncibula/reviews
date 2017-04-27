class PostsController < ApplicationController

  def index
    if !current_user
      redirect_to('/sessions/new')
    else
      @received_posts = Post.received_posts(current_user)
      check_post_count
      @sent_posts = Post.sent_posts(current_user)
    end
  end

  def admin
    if current_user.admin
      @all_posts = Post.all
    end
  end

  def new
    @post = Post.new
    @users = User.all_except(current_user)
  end

  def create
    @post = Post.new(post_params)
    @post.sender_id = current_user.id
    if @post.save
      flash[:notice] = "Successfully created post!"
      redirect_to '/'
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
      redirect_to @post
    else
      render 'edit'
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      flash[:notice] = "Successfully deleted post!"
      redirect_to posts_path
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














end
