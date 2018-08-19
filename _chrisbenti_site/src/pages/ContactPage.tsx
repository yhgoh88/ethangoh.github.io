import * as React from "react";

import HoverablePage from "../common/HoverablePage";

export class ContactPage
 extends HoverablePage {
  public render() {
    return super.containerRender(
      <>
        <div>
          Email me at{" "}
          {this.getLink("mailto:chrisbenti.com", "chris@chrisbenti.com")}
        </div>
        <div>
          Or check out my Twitter,{" "}
          {this.getLink("https://twitter.com/chrisbenti", "@chrisbenti")}
        </div>
        <div>
          If you're feeling chatty{" "}
          {this.getLink("http://m.me/chris.bentivenga", "Messenger")} works
        </div>
        <div>
          You can also try{" "}
          {this.getLink("https://discordapp.com/users/361710258915246081", "chrisbenti#2337")} on Discord
        </div>
      </>
    );
  }
}
