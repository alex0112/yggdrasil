class Tree < ApplicationRecord

  before_save do |tree|
    self.root_uri = URI.unescape(self.root_uri)
    self.name     = self.root_uri.split('/').last
    self.data     = Wiki::Yggdrasil::Yggdrasil
                      .new(uri: self.root_uri)
                      .children(depth: 1)
                      .to_json
  end

end
