describe('TravelPlanMap', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8000/');
  });

  it('ページの見出しが"Destination Setting"であること', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Destination Setting');
  });

  it('"Model Plans"のタブがクリックできること', async () => {
    await expect(page).toClick('a', { text: 'Model Plans' });
  });
});
