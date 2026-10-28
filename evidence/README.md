# Browser evidence

`site-preview.png` is an actual Chrome viewport screenshot of the website loaded over HTTP at http://localhost:8000/. It supports visual review but **does not fulfill the assignment's address-bar screenshot requirement**.

The agent attempted a capture of only its isolated browser window. macOS refused the capture (`could not create image from window`), so no address-bar screenshot is claimed.

Before submitting:

1. Start the server using the command in the root README.
2. Open http://localhost:8000/ and personally review the site and interactions.
3. Take a screenshot of only that browser window with the localhost address bar visible (on macOS: Shift+Command+4, then Space, then click the window). Keep private tabs and other personal information out of the capture.
4. Save it as `evidence/site-localhost.png` in this repository.
5. Add your review observations to REFLECTION.md, then commit and push the evidence:

```bash
git add evidence/site-localhost.png REFLECTION.md
git commit -m "Add localhost browser evidence and personal review"
git push origin feat/baseline-class-website
```
