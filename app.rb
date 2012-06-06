
require 'rubygems'
require 'net/http'
require 'sinatra'
require 'haml'
require 'sass'
   
get '/css/style.css' do
  sass :style
end
                     
get '/' do 
  haml :index 
end