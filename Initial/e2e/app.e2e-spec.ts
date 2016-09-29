import { MyBusGDGPage } from './app.po';

describe('my-bus-gdg App', function() {
  let page: MyBusGDGPage;

  beforeEach(() => {
    page = new MyBusGDGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
