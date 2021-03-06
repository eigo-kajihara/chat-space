json.array! @messages do |message|
  json.id       message.id
  json.text     message.content
  json.image    message.image.url
  json.date     message.created_at.strftime('%Y/%m/%d %H:%M:%S')
  json.name     message.user.name
end
