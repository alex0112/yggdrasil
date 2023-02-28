# Yggdrasil


_“Does Yggdrasil drink from it because it is the Well of Wisdom, 
 or is it the Well of Wisdom because Yggdrasil drinks from it?” 
 ― J. Aleksandr Wootton_



![Yggdrasil](https://user-images.githubusercontent.com/7142972/58755414-e6017600-84a0-11e9-967f-2e004d0397b0.png)

You. You're up late at night reading about some obscure mathematical topic. Again. You find yourself with *so many* open tabs on Wikipedia. Wouldn't it be nice if you could just pick an article, and then view a tree of the articles it references?

Introducing Yggdrasil. Named after the tree in Norse mythology that drinks from the well of all wisdom, Yggdrasil is here to help you drink just as deeply from the well of wisdom that is Wikipedia.

Yggdrasil takes a Wikipedia URI as an argument, and proceeds to spider out a dependency tree of referenced articles.

You can try the beta out ~~[here](https://wiki-tree.herokuapp.com)~~ (Since heroku got rid of their free tier the back end is no longer up, so every request will error out with an `HTTP 503`)  Or consume the data directly by installing [this gem.](https://github.com/alex0112/wiki-yggdrasil)

Shout out to [react-d3-tree](https://github.com/bkrem/react-d3-tree) for making this application possible.

