import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>

        <ion-grid>
          <ion-row>
            <ion-col size="12" size-sm>
              ion-col [size="12"] [size-sm]
            </ion-col>
            <ion-col size="12" size-sm>
              ion-col [size="12"] [size-sm]
            </ion-col>
            <ion-col size="12" size-sm>
              ion-col [size="12"] [size-sm]
            </ion-col>
            <ion-col size="12" size-sm>
              ion-col [size="12"] [size-sm]
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="12" size-md>
              ion-col [size="12"] [size-md]
            </ion-col>
            <ion-col size="12" size-md>
              ion-col [size="12"] [size-md]
            </ion-col>
            <ion-col size="12" size-md>
              ion-col [size="12"] [size-md]
            </ion-col>
            <ion-col size="12" size-md>
              ion-col [size="12"] [size-md]
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6" size-lg offset="3">
              ion-col [size="6"] [size-lg] [offset="3"]
            </ion-col>
            <ion-col size="3" size-lg>
              ion-col [size="3"] [size-lg]
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>ion-col</ion-col>
            <ion-col>ion-col</ion-col>
            <ion-col>ion-col</ion-col>
            <ion-col>ion-col</ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="6">ion-col [size="6"]</ion-col>
            <ion-col>ion-col</ion-col>
            <ion-col>ion-col</ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="3">ion-col [size="3"]</ion-col>
            <ion-col>ion-col</ion-col>
            <ion-col size="3">ion-col [size="3"]</ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="3">ion-col [size="3"]</ion-col>
            <ion-col size="3" offset="3">
              ion-col [size="3"] [offset="3"]
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>ion-col</ion-col>
            <ion-col>
              ion-col
              <br />#
            </ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
            </ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
              <br />#
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col class="ion-align-self-start">ion-col [start]</ion-col>
            <ion-col class="ion-align-self-center">ion-col [center]</ion-col>
            <ion-col class="ion-align-self-end">ion-col [end]</ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-start">
            <ion-col>[start] ion-col</ion-col>
            <ion-col>[start] ion-col</ion-col>
            <ion-col class="ion-align-self-end">[start] ion-col [end]</ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-center">
            <ion-col>[center] ion-col</ion-col>
            <ion-col>[center] ion-col</ion-col>
            <ion-col>[center] ion-col</ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
            </ion-col>
          </ion-row>

          <ion-row class="ion-align-items-end">
            <ion-col>[end] ion-col</ion-col>
            <ion-col class="ion-align-self-start">
              [end] ion-col [start]
            </ion-col>
            <ion-col>[end] ion-col</ion-col>
            <ion-col>
              ion-col
              <br />#
              <br />#
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>,
    ];
  }
}
