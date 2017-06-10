import { Angular4SampleAppPage } from './app.po';

describe('angular4-sample-app App', () => {
  let page: Angular4SampleAppPage;

  beforeEach(() => {
    page = new Angular4SampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
