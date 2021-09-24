import webDriver from "selenium-webdriver";
import chrome = require("selenium-webdriver/chrome");
import { Builder, By, error, Key, until } from "selenium-webdriver";
// const { Builder, By, Key, until } = require("selenium-webdriver");

const run = async () => {
	const service = new chrome.ServiceBuilder("./chromedriver").build();
	chrome.setDefaultService(service);

	const driver = await new Builder().forBrowser("chrome").build();

	await driver.get("https://google.com");

	setTimeout(async () => {
		await driver.quit();
	}, 3000);

	// let driver = await new Builder().forBrowser("chrome").build();
	// try {
	// 	await driver.get("https://www.naver.com/");

	// } catch (err) {
	// 	console.error(err);
	// }
};

run();
