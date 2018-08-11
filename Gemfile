source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.5'
# Use postgres as the database for Active Record
gem 'pg'

# Use Puma as the app server
gem 'puma', '~> 3.7'

# Added at 2018-06-13 20:34:06 -0600 by alex:
gem "foreman", "~> 0.64.0"

# Added at 2018-06-15 22:43:19 -0600 by alex:
gem "wiki-yggdrasil", "~> 0.2.0"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end


# Added at 2018-08-11 16:21:59 -0600 by alex:
gem "rack-cors", "~> 1.0"
