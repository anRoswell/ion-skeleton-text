import { Component } from "@angular/core"

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	data: any

	constructor() {}

	ionViewWillEnter() {
		setTimeout(() => {
			this.data = {
				heading: "Normal text",
				para1: "Lorem ipsum dolor sit amet, consectetur",
				para2: "adipiscing elit.",
			}
		}, 5000)
	}
}
