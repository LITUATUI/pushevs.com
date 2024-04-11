---
title: "Comment system and push notifications"
slug: "comment-system-and-push-notifications"
authors: "pedrolima"
date: "2024-04-02"
images:
  - "/images/watch-tower.avif"
---

Hi guys!

The new website is almost as I want it and you can expect articles more regularly from now on.

During the recent [migration from WordPress to Hugo](/news/2024/03/16/migration-from-wordpress-to-hugo) I noticed some things.

First, the push notification system from OneSignal wasn't sending notifications and adblockers were blocking the bell icon - that allows to subscribe or unsubscribe the service. Therefore, I decided to stop using this service, at least for now.

Maybe someday I will consider a new push notification service that adblockers don't find intrusive.

Second, the Disqus comment system is also being blocked by adblockers, so if you use an adblocker you won't see comments made on the Disqus platform.

I get it, Disqus ads are awful, because they are rarely related to content.

For now, I will keep the Disqus comment system active, while also using the new open-source comment system by [Giscus](https://giscus.app/pt).

Giscus is a clean open-source comment system that is ad-free and respects your privacy, but requires a GitHub account to use it.

However, having a GitHub account is something usual nowadays, you don't need to be a coder to have one. You can even use GitHub to share [cooking recipes](https://github.com/logicguy1/The-Cookbook)...

Anyway, I still have to decide if I will migrate the comments already made on Disqus to Giscus or not. This kind of migration usually doesn't give pretty results and it's a lot of work tweaking out the bugs.


One last thing. If you can't see images on this website, please update your browser. Images on this website are encoded in [AVIF](https://avif.io/), which is a modern, efficient and open-source image format.



Summing up...

- Push notifications are gone for now
- In the long run Giscus will replace Disqus as the sole comment system on this website, for now both will be active

Thanks for reading!