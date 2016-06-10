require 'jumpstart_auth'
require 'bitly'

class MicroBlogger
  attr_reader :client

  def initialize
    puts "Initializing MicroBlogger"
    @client = JumpstartAuth.twitter
    Bitly.use_api_version_3
  end

  def tweet(message)
    message.length <= 140 ? @client.update(message) : puts("tweet over 140 chr")
  end

  def direct_message(target, message)
    puts "Trying to send #{target} this direct message:"
    puts message
    message = "d @#{target} #{message}"
    followers_list.include?(target) ? tweet(message) : puts("#{target} not following you")
  end

  def followers_list
    followers = @client.followers.collect { |follower| @client.user(follower).screen_name }
  end

  def spam_followers(message)
    puts "Spamming this dm to all followers:"
    puts message
    followers_list.each { |follower| tweet("d @#{follower} #{message}") }
  end

  def show_last_tweet_from_each_friend
    friends = @client.friends
    friends.sort_by { |friend| @client.user(friend).screen_name }
    friends.each do |friend|
      timestamp = @client.user(friend).status.created_at
      printf "#{@client.user(friend).screen_name} said"
      printf " (#{timestamp.strftime("%A, %b %d")}) "
      printf "'#{@client.user(friend).status.text}'"
      puts ""
    end
  end

  def shorten_url(original_url)
    bitly = Bitly.new('hungryacademy', 'R_430e9f62250186d2612cca76eee2dbc6')
    puts "Shortening this URL: #{original_url}"
    return bitly.shorten(original_url).short_url
  end

  def turl(message, url)
    message = message + " " + shorten_url(url)
    tweet(message)
  end

  def run
    puts "Welcome to the JSL Twitter Client!"
    puts "(q)uit, (t)weet your_tweet, (m)essage your_message, (s)pam message to message all of your followers, or (l)atest to show the last tweet from each friend"
    input = ""
    until input == "q" || input == "quit"
      printf "enter command: "
      input = gets.chomp
      parts = input.split(" ")
      command = parts.first
      case command
        when "q", "quit" then puts "Goodbye!"
        when "t", "tweet" then tweet(parts[1..-1].join(" "))
        when "m", "message" then direct_message(parts[1], parts[2..-1].join(" "))
        when "s", "spam" then spam_followers(parts[1..-1].join(" "))
        when "l", "latest" then show_last_tweet_from_each_friend
        when "t", "turl" then turl(parts[1..-2].join(" "), parts[-1])
        else
          puts "invalid command '#{command}'"
      end
    end
  end
end

blogger = MicroBlogger.new
blogger.run
