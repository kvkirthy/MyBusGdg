import { Sample2Page } from './app.po';

describe('sample2 App', function() {
  let page: Sample2Page;

  beforeEach(() => {
    page = new Sample2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
