---
title: "Migration from WordPress to Hugo"
slug: "migration-from-wordpress-to-hugo"
authors: "pedrolima"
date: "2024-03-16"
images:
  - "images/Hugo-static-site-generator.avif"
---

Hi guys, I'm back for good and now with a better website.

PushEVs is no longer made with WordPress, now it's made with a static site generator called [Hugo](https://gohugo.io/).

Hugo describes itself as "world's fastest framework for building websites", but that's not why I chose it to make the new PushEVs website.

As time goes by, WordPress websites start to become slow and buggy - partly because installing plugins is fun and easy... Security and backups/restores can also give us more headaches than they should.

This is why I chose a static generator like Hugo:

- Clean code that makes websites super fast
- Backups and restores are easy with git
- No database to manage and worry about getting hacked
- Requires less server resources, meaning less electricity used and less pollution created
- Free hosting with [Cloudflare Pages](https://pages.cloudflare.com/)

I was already using Hugo in some of my other websites, so I really wanted to finally stop using WordPress.

These were the tools I used:

- [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown) to convert WordPress posts and pages to markdown files
- [Visual Studio Code](https://code.visualstudio.com/) to write markdown
- [ChatGPT](https://chat.openai.com/) to help with regex and clean up the code
- [ImageMagick](https://www.imagemagick.org/) to batch convert image files to AVIF
- Coffee...

Migrating from WordPress wasn't as easy as I wished and there are optimizations to be made - in the next days I'll check every post one by one.

However, I think the hardest part was finding a [Hugo theme](https://github.com/hbstack/theme-cards) that had all the functions I was using in WordPress and I didn't want to lose. I especially like the recent/featured posts widget in the sticky sidebar. The theme developer is also very knowledgeable and helpful, which made my decision easier.

The code of this website is now [open-source](https://github.com/LITUATUI/pushevs.com), not only in the hope of inspiring others to do the same, but also to allow my visitors to read the code and suggest changes.

I'm still considering if I should continue with Disqus comments or migrate to the open-source alternative called [Giscus](https://giscus.app/)...

I hope that you like the changes.