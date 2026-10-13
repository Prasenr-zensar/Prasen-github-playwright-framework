import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  async openGitHub() {
    await this.page.goto('https://github.com');
  }
}