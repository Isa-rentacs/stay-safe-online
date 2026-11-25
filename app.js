/* Stay Safe Online — a self-paced internet safety game.
   Static site. Progress is stored only in this browser (localStorage). */
(function () {
  "use strict";

  var STORAGE_KEY = "stay-safe-progress-v1";

  /* ---------- The debrief questions (same for every module) ---------- */
  var DEBRIEF = [
    ["Who wants this?", "Who made this message, button or app, and what are they after?"],
    ["What do they get?", "Money, your info, your attention, your photos, your account?"],
    ["Can I undo it?", "If I tap, send or post, can I take it back?"],
    ["Would I be OK showing Dad?", "If not, that's the sign to show Dad first."]
  ];

  /* ---------- All 12 modules ---------- */
  var MODULES = [
    {
      title: "Oops is OK",
      blurb: "Telling Dad right away gets help, not trouble.",
      intro: [
        "Everyone taps the wrong thing sometimes. Grown-ups too. The internet is full of tricks made by people whose whole job is fooling people.",
        "When something goes wrong, the fastest fix is telling Dad right away. You get <strong>help, not trouble</strong>. That rule is the start of every mission in this game."
      ],
      scenarios: [
        {
          title: "Play Star Catcher — then the ad pops up",
          sim: "starAd",
          question: "Play the toy game below. Tap the stars to score. After a bit, something will pop up — just like in a real game. Decide what to tap, for real. There is no list of answers here.",
          todo: ["The little ✕ inside an ad is part of the ad — tapping it can still count as tapping the ad.", "The safe way out is the browser's own tab close, up in the tab bar, outside the ad.", "Closing the tab is always OK. Telling Dad is always OK."],
          feedbackGood: "Yes! You closed the tab instead of tapping inside the ad. The ad was fake — there was no prize, and CLAIM would have tried to steal your account or install junk. Closing the tab stops it, and telling Dad fixes it in one minute.",
          feedbackClaim: "Oops — that's what the trick wants. There is no prize. CLAIM and DOWNLOAD are the trap: they lead to a fake page that asks for your password, or tries to install junk. The phone was never going to give you free Robux.",
          feedbackFakeX: "Oops — that little ✕ is part of the ad, not a real close button. In real ads the ✕ is often a tap area itself, so tapping it can open the bad page anyway. The real close is the browser's tab ✕, up in the tab bar, outside the ad."
        },
        {
          title: "Days later",
          sim: "daysLater",
          question: "Last week, in game chat, you told a player where your family gets pizza every Friday. Now it feels like maybe that was too much. Do what you would really do on the pretend phone below. (Tapping the bar at the very bottom goes to the Home Screen.)",
          todo: ["It's never too late to tell.", "That 'hmm, maybe that was too much' feeling is worth listening to.", "Dad would much rather know than not know."],
          feedbackGood: "Exactly. It's never too late! Dad can help you think about it, and maybe block or report the player. Noticing that something felt off is a great skill.",
          feedbackLate: "It's never too late! Dad can help even if it happened last week or last month. That 'hmm' feeling is worth telling him about.",
          feedbackDelete: "Deleting doesn't undo what was said, and it means you're carrying the worry alone. Telling Dad works much better.",
          feedbackBlock: "Blocking is OK, and Dad might want to block or report the player too. But blocking doesn't undo what was said, so tell Dad now as well. It's never too late.",
          feedbackDad: "Exactly. Tell Dad now. It's never too late! Dad can help you think about it, and maybe block or report the player. Noticing that something felt off is a great skill.",
          dadLabel: "Tell Dad"
        },
        {
          title: "Your friend is worried",
          sim: "friendWorried",
          question: "Your friend Mia (pretend) just texted you. Read it and do what you would really do on the pretend phone below.",
          todo: ["Good friends tell friends to get a grown-up.", "Secrets about scary online stuff are the kind you should never keep.", "The sooner you tell, the easier it is to fix."],
          feedbackGood: "That's a true friend move. Parents can close the page and make sure nothing bad happened. Most parents are relieved, not mad.",
          feedbackSecret: "Being a good friend is great, but keeping this secret leaves Mia stuck with a scary problem. Grown-ups can actually fix it.",
          feedbackCard: "Oops. That's what the trick wants. The card number would go straight to a stranger.",
          feedbackDad: "Telling Dad is a true friend move too! Secrets about scary online stuff are the kind you should never keep. Dad can help Mia get her mom, and parents can close the page and make sure nothing bad happened.",
          dadLabel: "Tell Dad"
        }
      ],
      dinner: "What's one 'oops' Dad has made online?"
    },
    {
      title: "Phone, apps, web: who runs what?",
      blurb: "Browser, search engine, website, app: who owns each?",
      intro: [
        "Your phone is like a backpack full of tools, and each tool was made by a different company. <strong>Safari</strong> is a <em>browser</em>, a window for looking at websites. <strong>Google</strong> is a <em>search engine</em>, a website that finds other websites.",
        "A <em>website</em> belongs to whoever made it, and that could be anyone. An <em>app</em> is a program you install, made by a company that wants something from you."
      ],
      scenarios: [
        {
          title: "Which one is the browser?",
          sim: "findBrowser",
          question: "Dad texted you a little job. Do it on the pretend iPhone below. Tap the real things you would tap on your own phone. There is no list of answers here.",
          todo: ["Browser = the window (Safari, Chrome).", "Search engine = the finder (Google, Bing).", "Website = a page someone made."],
          feedbackGood: "Right! Safari is the window. Google is a website you're looking at <em>through</em> that window. Safari's own buttons (the address bar, Back, Tabs) sit around the edges and stay the same on every website. That's how you know they belong to the browser.",
          feedbackGoogle: "Close! Google is a search engine, a website that finds other websites. That button belongs to Google's page, not to the browser. The browser is Safari, the app you opened to see it. Its own buttons are around the edges: the address bar and the toolbar at the bottom.",
          feedbackResult: "The cat video is on a website. The window you see websites through is the browser, Safari. To open a new tab you need one of Safari's own buttons, down in the toolbar at the bottom.",
          feedbackDad: "Asking Dad is always OK! Here's the secret: Safari is the window, and Google is a website you look at through it. Safari's own buttons (address bar, Back, Tabs) are around the edges of the screen."
        },
        {
          title: "Who wrote this page?",
          sim: "checkSource",
          question: "Homework: \"How long can cats live? Write down where you found it.\" You tapped the top search result and landed on this page. Find out who made it, using the pretend phone below.",
          todo: ["Check the address bar to see whose site you're on.", "Being at the top of Google doesn't make something true.", "If something sounds wild, check it somewhere else."],
          feedbackGood: "Yes! The address bar says best-cat-facts.example, so whoever owns best-cat-facts wrote this page. Could be anyone! Anyone can make a website, including people who are wrong or tricky. (And cats definitely don't live to 200.)",
          feedbackBack: "Smart move! Going back to check somewhere else is exactly right when something sounds wild. And notice the address bar said best-cat-facts.example: whoever owns that site wrote it, and that could be anyone.",
          feedbackGoogle: "Nope. Anyone can paste a 'Checked by Google' badge on their page. Google only points to pages. It doesn't write them or check that they're true. (And cats definitely don't live to 200!) To see whose site you're on, look at the address bar.",
          feedbackApple: "Apple made the phone and Safari, but not the websites you visit. Those are made by millions of different people, and anyone can write 'Apple Approved' on their own page. The address bar shows whose site it really is.",
          feedbackMore: "That button belongs to the page itself. It just takes you deeper into the same site, which still won't tell you who made it. The address bar at the top of Safari shows whose site you're on.",
          feedbackDad: "Asking Dad is always OK! He'd show you the address bar: best-cat-facts.example. Whoever owns that site wrote the page, and that could be anyone. Being the top result doesn't make it true."
        },
        {
          title: "Who runs the app?",
          sim: "appStore",
          question: "You found a free game in the App Store. Before you ask Dad to download it, find out two things on its page: who made it, and how it makes money.",
          todo: ["Every app and website has an owner.", "'Free' usually means they earn money another way.", "Always ask: who runs this, and what do they want?"],
          feedbackGood: "Right! FunFizz Games, a company, made it, and it wants to make money from it. 'Free' apps still need money, so they earn it from ads, purchases, or information about players. Knowing who's behind an app helps you guess what it wants.",
          feedbackGet: "Hold on! GET downloads the app. Installing anything is an 'ask Dad first' thing, and you haven't found out who runs it yet. Every app is made by someone, usually a company, and companies want something: money, your time, or your info.",
          feedbackApple: "That badge is from the App Store, which Apple runs. Apple checks apps a little, but most apps are made by other companies. Look for the name right under the app's title to see who really made it.",
          feedbackDad: "Asking Dad is always OK! Together you'd find it: FunFizz Games Inc. made it (not Apple), and it earns money from in-app purchases and information about players. 'Free' usually means they earn money another way."
        }
      ],
      dinner: "Name three apps on your phone. Who made each one?"
    },
    {
      title: "Ad or real?",
      blurb: "Sponsored results, influencer ads, fake Download buttons.",
      intro: [
        "Ads pay for a lot of the internet. Ads aren't evil, but they often dress up to look like normal stuff so you'll tap them.",
        "Learning to spot an ad is a superpower. Look for little words like <strong>Sponsored</strong>, <strong>Ad</strong>, <strong>#ad</strong>, <strong>Partner</strong> or <strong>Promoted</strong>."
      ],
      scenarios: [
        {
          title: "The top result",
          sim: "adSearch",
          question: "Dad wants to get you a new bike helmet. He texted: \"Can you find a page that helps us choose one? Not an ad!\" Use the pretend phone below. Tap what you would really tap.",
          todo: ["'Sponsored' = paid to be there.", "Ads at the top aren't automatically the best.", "Scroll a little to find regular results."],
          feedbackGood: "Yes! You skipped the result marked 'Sponsored' and picked a regular one. 'Sponsored' means the company paid to be at the top. It's not there because it's the best answer.",
          feedbackAdInfo: "Sharp eyes! You checked the tiny 'Sponsored' label, and it says helmetdeals paid to be there. 'Sponsored' means the company paid to be at the top. It's not there because it's the best answer.",
          feedbackAd: "Oops, that's a common mix-up! The top spot often goes to whoever paid. See the tiny 'Sponsored' label above it? That one is an ad. Companies pay to be first, and it's not there because it's the best answer.",
          feedbackDad: "Asking Dad is always OK! Together you'd spot the tiny 'Sponsored' label on the top result. That means the company paid to be first. The regular results are just below it."
        },
        {
          title: "Sparkle Sam's lip balm",
          sim: "influencer",
          question: "Your friend Mia (pretend) sent you this video. Before you text her back, find out why Sparkle Sam is really talking about this lip balm. Tap around the video like you would in a real app.",
          todo: ["#ad, #partner, #sponsored or a discount code = paid post.", "Influencers can be friendly AND paid at the same time.", "Ask: would they still say this if nobody paid them?"],
          feedbackGood: "Exactly. '#ad', '#partner' and 'Paid partnership' mean GlowBerry is paying her to say it. Influencers often get paid or get free stuff to talk about products. It's an ad, even when it feels like a friend talking.",
          feedbackShop: "Hold on! Buying anything is an 'ask Dad first' thing. And look closer at the video: it's an ad. GlowBerry is paying her to say it, even though it feels like a friend talking.",
          feedbackCode: "Oops! That discount code helps her earn money from every sale. Maybe she really does love it, but look closer at the video: GlowBerry is paying her to say it. It's an ad.",
          feedbackDad: "Asking Dad is always OK! He'd show you the '#ad' and '#partner' tags in the caption and the 'Paid partnership' label. Those mean GlowBerry is paying her to say it. It's an ad, even when it feels like a friend talking."
        },
        {
          title: "Too many Download buttons",
          sim: "downloadPage",
          question: "You want unicorn coloring pages to print. You found this site, and there are lots of buttons. Do what you would really do on the pretend phone below.",
          todo: ["Big flashy buttons on download sites are often ads.", "The real link is usually small and next to the file name.", "Downloading or installing anything? Ask Dad first."],
          feedbackGood: "Great eye! The real link is often the small plain one next to the file name, and the big green buttons are ads (see the tiny 'Ad' marks?). Downloading anything is an 'ask Dad first' thing, so show Dad before you open it.",
          feedbackLoud: "Oops, that's the trap! Big, flashy buttons on download pages are often ads that lead to junk apps or tricky pages. See the tiny 'Ad' mark above it? Tapping lots of them to be sure would just open a bunch of ads, and maybe something worse. Slow down and ask Dad.",
          feedbackClose: "Leaving is always OK! A page full of big flashy download buttons is a page full of ads. Next time, ask Dad to help: the real link is usually the small plain one next to the file name.",
          feedbackDad: "Great thinking. The real link is often the small plain one next to the file name, and the big green buttons are ads. Downloading anything is an 'ask Dad first' thing."
        }
      ],
      dinner: "Find one ad together. What tiny word gave it away?"
    },
    {
      title: "The Accept button",
      blurb: "Cookies, permissions, installs, payments: what are you giving?",
      intro: [
        "Lots of buttons say <strong>Accept</strong>, <strong>Allow</strong> or <strong>OK</strong>. Some are no big deal. Some give away something that's yours.",
        "Before you tap, ask: <strong>what am I actually giving?</strong>"
      ],
      rules: [
        "🍪 <strong>Cookies</strong> on a site you chose to open are fine. It just means the site remembers you. Accept or Reject are both safe.",
        "🔑 If it asks for something of yours (<strong>location, camera, photos, contacts, money, a password or code</strong>), ask: does this app need it to do its job? A map needs your location. A game doesn't.",
        "🚫 If it <strong>popped up out of nowhere</strong> or rushes you, press nothing. Just close it.",
        "💵 <strong>Money or installing anything</strong> means asking Dad first. Every time."
      ],
      scenarios: [
        {
          title: "The cookie banner",
          sim: "cookieBanner",
          question: "You opened the city library website yourself to look for a dragon book. Something pops up. Do what you would really do on the pretend phone below.",
          todo: ["Cookies on a site you chose = fine.", "Accept or Reject are both safe.", "Cookie banners never need your name, school or password."],
          feedbackGood: "Yes! On a site you chose, cookies just help it remember you. Either answer is safe. Pick one and keep going. (And a cookie banner never needs your name or school, so never type real info to get past a pop-up.)",
          feedbackClose: "Closing is always OK! But no need to panic next time: cookie banners are normal on real websites you chose. Accept and Reject are both safe here, so you can pick one and keep looking for your book.",
          feedbackDad: "Asking Dad is always OK! He'd tell you cookie banners are normal on real websites. On a site you chose, Accept and Reject are both safe. And a cookie banner never needs your name or school."
        },
        {
          title: "The flashlight wants your contacts",
          sim: "permission",
          question: "You just installed a flashlight app (with Dad's OK). You open it, and something pops up. Tap what you would really tap.",
          todo: ["Location, camera, photos, contacts: ask 'does it need this to do its job?'", "If not, tap Don't Allow.", "Not sure? Ask Dad. You can change it later in Settings."],
          feedbackGood: "Exactly right. Ask: does this app need it to do its job? A map needs location. A video chat needs the camera. A flashlight needs nothing of yours. (See? The light works fine without your contacts.)",
          feedbackAllow: "Oops. A flashlight just turns on a light! It has no reason to see your friends' phone numbers. That info might get sold.",
          feedbackSelect: "Even picking just a few gives it those friends' names and numbers, and you can't take that back. 'Don't Allow' is the right tap. A flashlight needs nothing of yours.",
          feedbackClose: "Closing the app is always OK! Next time you can also just tap Don't Allow. Ask: does this app need it to do its job? A flashlight needs nothing of yours.",
          feedbackDad: "Asking Dad is always OK! He'd ask: does a flashlight need your contacts to do its job? Nope! So Don't Allow is the right tap. You can always change it later in Settings."
        },
        {
          title: "The surprise bonus pack",
          sim: "bonusPack",
          question: "You're playing Bubble Pop Party on the pretend phone below. Keep playing and do what you would really do. (On this pretend iPhone, tapping the bar at the very bottom is like swiping up to close the app.)",
          todo: ["Popped up out of nowhere? Press nothing. Close it.", "A timer or 'hurry' = a trick to stop you thinking.", "Money or installing = ask Dad first. Every time."],
          feedbackGood: "Perfect. It came out of nowhere, it's rushing you, and it costs money. That's three reasons to press nothing. You closed the game, and you can ask Dad later if you really want it.",
          feedbackAccept: "That timer is there to rush you so you don't think! Installing things and spending money are always 'ask Dad first'.",
          feedbackLater: "Sometimes even small buttons on surprise pop-ups do sneaky things. The safest move is to press nothing and close the game itself.",
          feedbackDad: "Perfect. It came out of nowhere, it's rushing you, and it costs money. That's three reasons to press nothing. Asking Dad is exactly right."
        }
      ],
      dinner: "Look at your Settings → Privacy together. Which apps can see your location?"
    },
    {
      title: "Pressure tricks",
      blurb: "Hurry, you're special, be scared, keep it secret, just this once.",
      intro: [
        "Tricksters can't make you do anything, so they try to make you <em>feel</em> something: rushed, special, scared, or like it's a secret.",
        "There are 5 big tricks: <strong>Hurry!</strong> · <strong>You're special</strong> · <strong>Be scared</strong> · <strong>Keep it secret</strong> · <strong>Just this once</strong>. When you feel that push, that's your signal to slow down."
      ],
      scenarios: [
        {
          title: "Only 2 minutes left!",
          sim: "hurryShop",
          question: "You open the shop in a game you play. Look around, notice how it makes you feel, and do what you would really do. (Tapping the bar at the very bottom is like swiping up to close the app.)",
          todo: ["Timers, countdowns, 'only today' = Hurry trick.", "If you feel rushed, slow down on purpose.", "Real friends and real deals can wait 5 minutes for you to ask Dad."],
          feedbackGood: "Yes! You didn't let the timer push you. That's the Hurry trick: timers and 'before it's gone' are there to stop you from thinking. Real good deals don't vanish in 2 minutes.",
          feedbackClaim: "It looks nice, but see the timer and '47 players looking'? That's the Hurry trick, built to make you tap without thinking. And now it wants your password! Real good deals don't vanish in 2 minutes.",
          feedbackDad: "Yes! Timers and 'before it's gone' are the Hurry trick. They're there to stop you from thinking. Real good deals can wait 5 minutes for you to ask Dad.",
          dadLabel: "Tell Dad"
        },
        {
          title: "Just between us",
          sim: "secretChat",
          question: "A player you've only met in the game sends you messages. Do what you would really do in the pretend chat below.",
          todo: ["'You're so special/mature' from someone you don't know = warning sign.", "'Keep it secret from your parents' = always tell Dad.", "Good people never ask kids to hide things from their family."],
          feedbackGood: "Wow, you spotted both tricks: 'You're special' and 'Keep it secret'! Someone who wants you to hide things from your parents is not being a friend. Tell Dad, and it's OK to stop replying.",
          feedbackBlock: "Great move! Blocking stops the chat, and it's OK to stop replying. You spotted two tricks: 'You're special' (so mature!) and 'Keep it secret'. Someone who wants you to hide things from your parents is not being a friend. Now tell Dad too.",
          feedbackLeave: "Leaving the chat is OK. It's fine to stop replying! That 'hmm' feeling was right: 'You're special' plus 'Keep it secret' are two tricks. Someone who wants you to hide things from your parents is not being a friend. Tell Dad too.",
          feedbackAgree: "It does feel nice. That's how the trick works! A stranger using compliments ('You're special') plus a secret ('Keep it secret') is a big warning sign. Tell Dad, and it's OK to stop replying.",
          feedbackAsk: "Good question to wonder about, but asking them keeps the chat going. The safe move is to tell Dad instead. It's OK to stop replying, or to block them.",
          dadLabel: "Tell Dad"
        },
        {
          title: "Your account will close!",
          sim: "scaryText",
          question: "This text just arrived on your phone, and your heart jumps a little. Do what you would really do. (Tapping the bar at the very bottom goes to the Home Screen.)",
          todo: ["Scary message about your account? Don't tap the link.", "Open the real app yourself to check.", "Feel the push → slow down → ask Dad."],
          feedbackGood: "Yes! You opened the real game app yourself, and your account is fine. If something's really wrong with your account, the real app will tell you. Never use a link in a scary message.",
          feedbackJunk: "Yes! Reporting it as junk deletes it without tapping the link. If something's really wrong with your account, the real app will tell you. Never use a link in a scary message. Show Dad too.",
          feedbackLink: "Oops, that link goes to a fake login page that steals your password. Fear plus hurry plus 'just this once' is a triple trick. Don't log in. Open the real app yourself, or show Dad.",
          feedbackReply: "Real companies never ask for your password in a message, and replying tells them your number is real. Don't reply. Show Dad.",
          feedbackDad: "Yes! Showing Dad is exactly right. Fear plus hurry plus 'just this once' is a triple trick. If something's really wrong with your account, the real app will tell you. Never use a link in a scary message.",
          dadLabel: "Show Dad"
        }
      ],
      dinner: "Which of the 5 tricks do you think works best on grown-ups?"
    },
    {
      title: "Fake messages",
      blurb: "Fake prizes, package texts, QR codes, fake virus pop-ups.",
      intro: [
        "Now you know the pressure tricks, so let's practice on real-looking fakes. Fake messages pretend to be from a company, a delivery service, or even your phone itself.",
        "The good news: once you know the patterns, they're pretty easy to spot."
      ],
      scenarios: [
        {
          title: "The package text",
          sim: "packageText",
          question: "You didn't order anything. Then your phone buzzes with a new text. Check it on the pretend phone below and do what you would really do.",
          todo: ["Package you didn't order = fake.", "Don't reply, don't tap the link.", "Show Dad, then delete."],
          feedbackJunk: "Right! You didn't order anything, it came from a random number, and it wants money through a link. That's a fake. Delete and Report Junk got rid of it without tapping the link. Show Dad too.",
          feedbackPay: "Oops! The $1.99 is just bait. The real goal is to get the card number so they can take much more. You didn't order anything, so there's no package. Don't tap, show Dad, then delete.",
          feedbackReply: "Replying tells scammers your number is real, so they send more. Don't reply. Show Dad and delete.",
          feedbackDad: "Right! You didn't order anything, it came from a random number, and it wants money through a link. That's a fake. Show Dad, then delete it.",
          dadLabel: "Show Dad"
        },
        {
          title: "The QR code poster",
          sim: "qrPoster",
          question: "You're at the park with your friend Mia (pretend). She sees a poster and grabs your arm: \"Scan it!\" Your Camera is already open on the pretend phone below. Do what you would really do. (Tapping the bar at the very bottom closes the camera.)",
          todo: ["QR code = a link you can't read.", "Prize you didn't enter = fake.", "Only scan QR codes you trust, and ask Dad if you're not sure."],
          feedbackGood: "Smart! A QR code is a hidden link, and 'everyone wins' is fake. QR codes from random posters or stickers can go to fake sites. Only scan ones you trust, like a restaurant menu with Dad.",
          feedbackOpen: "Oops! A QR code is just a link in disguise, so you can't tell where it goes by looking at it. And a 'free prize' you didn't enter is a classic trick. Even if you don't type anything, the page could still trick you or try to get you to install something. Best to skip it.",
          feedbackDad: "Smart! Asking Dad is exactly right. A QR code is a hidden link, and 'everyone wins' is fake. Only scan ones you trust, like a restaurant menu with Dad."
        },
        {
          title: "Virus detected!",
          sim: "virusPopup",
          question: "You're reading dinosaur facts for fun on the pretend phone below. Keep reading, and if something appears, do what you would really do.",
          todo: ["Websites can't scan your phone. 'Virus found' pages are fake.", "Don't tap buttons inside. Close the whole tab.", "Never call numbers from pop-ups."],
          feedbackGood: "Yes! Websites can't look inside your phone to find viruses. This was just a scary page. You closed the whole tab (tabs button, then ✕) without tapping anything inside it. Now tell Dad.",
          feedbackClean: "That button is the trap! It might try to install something or ask for money. The 'virus' isn't real: websites can't look inside your phone. Close the tab (tap the tabs button, then ✕) and tell Dad.",
          feedbackCall: "That number goes to scammers, not Apple. They'd try to get money or passwords. Never call numbers from pop-ups. Close the tab (tap the tabs button, then ✕) and tell Dad.",
          feedbackInside: "Oops! Even the small OK is part of the scary page, so tapping it can open more pop-ups or a download. Don't tap buttons inside. Close the whole tab (tap the tabs button, then ✕) and tell Dad.",
          feedbackDad: "Yes! Telling Dad is exactly right. Websites can't look inside your phone to find viruses. This is just a scary page. Dad can close the tab (tabs button, then ✕).",
          dadLabel: "Tell Dad"
        }
      ],
      dinner: "Has Dad ever gotten a fake text? What did it say?"
    },
    {
      title: "Free Robux isn't free",
      blurb: "Gift-card scams, fake apps, in-app purchases, loot boxes.",
      intro: [
        "Games cost a lot to make, so many 'free' games make money in sneaky ways. And scammers know kids want game money, so they use it as bait.",
        "If someone offers free game currency, they want something from you."
      ],
      parentNote: "<strong>Note for Dad:</strong> Turn on <strong>Ask to Buy</strong> (Settings → your name → Family Sharing → Ask to Buy). Then every purchase or download sends a request to your phone first.",
      scenarios: [
        {
          title: "The Robux generator",
          sim: "robuxGen",
          question: "A video said this site gives free Robux, so you opened it. Look around the pretend phone below and do what you would really do.",
          todo: ["'Free Robux / V-Bucks / gems' sites are always scams.", "Never type your game password anywhere except the real app.", "Saw it in a video? Videos can be scams too."],
          feedbackGood: "Exactly! You closed it. Nobody can 'make' game money for free. Sites like this steal accounts, and asking for your password is the giveaway.",
          feedbackPassword: "Oops. Generators don't exist. The site wants your password to steal your account, and the 'offers' are tricks too. Never type your game password anywhere except the real app.",
          feedbackUsername: "Good instinct to protect your password! But the site will still push you to 'complete offers', which are more tricks (see? one even asks for your password after all). There's no such thing as a Robux generator. Just close it.",
          feedbackDad: "Exactly! Nobody can 'make' game money for free. Sites like this steal accounts, and asking for your password is the giveaway. Showing Dad is a great move."
        },
        {
          title: "The gift card deal",
          sim: "giftCard",
          question: "You're playing a building game. A player you don't know starts sending messages in the server chat. Do what you would really do on the pretend phone below.",
          todo: ["Someone asking for a gift card code = scam.", "Gift card codes are like cash: gone forever once sent.", "Block, then tell Dad."],
          feedbackGood: "Yes! Anyone who asks for gift card codes is almost always scamming. That's true for grown-ups too. Blocking was right. Now tell Dad.",
          feedbackNo: "Yes! Saying no is right. Anyone who asks for gift card codes is almost always scamming, and a gift card code is like cash. Now block them and tell Dad.",
          feedbackDeal: "They'd keep the $25 and send nothing. A gift card code is like cash. Once you send it, it's gone. Say no, block, and tell Dad.",
          feedbackFirst: "Smart thinking, but they won't, and chatting more gives them time to pressure you. See? They're already rushing you. Just say no and tell Dad.",
          feedbackDad: "Yes! Anyone who asks for gift card codes is almost always scamming. That's true for grown-ups too. Telling Dad is exactly right, and you can block them too.",
          dadLabel: "Tell Dad"
        },
        {
          title: "The mystery chest",
          sim: "mysteryChest",
          question: "You're in the shop of a game you play. You have 400 💎 gems that Dad paid for. Look around and do what you would really do. (Tapping the bar at the very bottom closes the game.)",
          todo: ["Game currency = real money in a costume.", "Mystery boxes are designed to make you want 'one more'.", "Any purchase = ask Dad first."],
          feedbackGood: "Right! Gems were bought with real dollars, and mystery chests are like slot machines: the chances are tiny. Mystery boxes are built to make you want 'one more try'. You left without spending. Ask Dad before spending.",
          feedbackOpen: "That 'so close, one more!' feeling is exactly what the game is designed for! Each chest has the same tiny chance. You could open 50 and still not get the dragon. And those gems were bought with real dollars. Ask Dad before spending.",
          feedbackBuy: "Oops. Gems are real money in a costume, and games use them so spending doesn't feel like spending. 400 gems = $4.99 of Dad's real money. Any purchase = ask Dad first.",
          feedbackDad: "Right! Gems were bought with real dollars. Mystery boxes are built to make you want 'one more try'. Asking Dad before spending is exactly right."
        }
      ],
      dinner: "What would you buy with $25 in real life instead?"
    },
    {
      title: "Who's really there?",
      blurb: "Friend requests, game chat, 'friends' you've never met.",
      intro: [
        "Online, anyone can pick any name and any picture. A '12-year-old girl' could really be a grown-up, and you can't check.",
        "That doesn't mean everyone is bad. It means people you've only met online are <strong>strangers</strong>, even if they're friendly."
      ],
      scenarios: [
        {
          title: "The friend request",
          sim: "friendRequest",
          question: "You open the Friends screen in a game you play, and there's a new request. You've never met Lily in real life. Do what you would really do on the pretend phone below.",
          todo: ["Only add people you know in real life.", "A profile picture and age can be made up.", "Not sure? Ask Dad before you accept."],
          feedbackGood: "Great rule! Friends you know in real life are the safe list. If you're not sure, Dad can help you decide.",
          feedbackBlock: "Blocking is always OK! You can't check who's really behind a profile. Friends you know in real life are the safe list. If you're not sure, Dad can help you decide.",
          feedbackAccept: "She might be! But you can't check who's really behind a profile. Anyone can use a cat picture and say they're 11. Only add people you know in real life, or ask Dad first.",
          feedbackPhoto: "A photo doesn't prove anything, because anyone can send someone else's picture. And trading photos with strangers is never a good idea. Decline, or ask Dad.",
          feedbackDad: "Great idea! If you're not sure, Dad can help you decide. Friends you know in real life are the safe list, and a profile picture and age can be made up."
        },
        {
          title: "Let's move to another app",
          sim: "moveApp",
          question: "You've played with Jayden in a game for a few weeks. He's always been nice. Today he sends new messages. Do what you would really do in the pretend game chat below.",
          todo: ["'Let's move to another app' = warning sign.", "'Don't tell your parents' = always tell your parents.", "Being nice for a long time doesn't make someone safe."],
          feedbackGood: "Yes! Moving to another app gets you away from the game's safety features, and asking you to keep it secret is a red flag. Telling Dad is exactly right.",
          feedbackNo: "Saying no is great! Moving to another app gets you away from the game's safety features, and asking you to keep it secret is a red flag. 'Don't tell your parents' means always tell, so tell Dad about the request too.",
          feedbackBlock: "Good move! Blocking or reporting is always OK. Moving you to another app, plus 'don't tell your parents', are two big warning signs. Tell Dad about the request too.",
          feedbackSure: "Weeks of being nice can be part of the plan. Moving you to another app, plus 'don't tell your parents', are two big warning signs. Say no and tell Dad.",
          feedbackGo: "Careful thinking! But the new app may have no safety tools at all, and the secret part is a big warning sign. Say no and tell Dad.",
          dadLabel: "Tell Dad"
        },
        {
          title: "Just some questions",
          sim: "justQuestions",
          question: "You're building in a block game, and another player stops by to chat. Do what you would really do on the pretend phone below. (Tapping the bar at the very bottom closes the game.)",
          todo: ["Keep game chat about the game.", "\"I don't share that\" is a great answer.", "Keeps asking anyway? Block, report, tell Dad."],
          feedbackGood: "Smooth! You can be friendly and still keep your info private. If they keep asking, that's a sign to tell Dad.",
          feedbackAnswer: "Little answers add up! Grade + city + more questions later = a stranger knowing a lot about you. See how they asked for even more? Keep game chat about the game.",
          feedbackBlock: "Blocking is always OK! If someone keeps pushing for personal stuff, block, report and tell Dad. Next time you can also stay friendly and just say \"I don't share that stuff.\"",
          feedbackQuit: "Leaving the game is always OK! But you don't have to quit forever. Just keep chats about the game. If they keep pushing for personal stuff, block and tell Dad.",
          feedbackDad: "Asking Dad is always OK! He'd say: keep game chat about the game. \"I don't share that stuff\" is a great answer. If they keep asking, block, report, tell Dad."
        }
      ],
      dinner: "Who are 3 people you're friends with online that you also know in real life?"
    },
    {
      title: "Puzzle pieces of you",
      blurb: "Small details add up, and a shared photo is forever.",
      intro: [
        "Your identity is made of pieces: name, school, face, sports team, schedule, where you live. One piece alone is usually fine.",
        "But strangers can put pieces together like a puzzle. Let's meet <strong>Nora</strong>. She's made up, but her posts look a lot like real ones."
      ],
      scenarios: [
        {
          title: "Nora's posts",
          sim: "noraPosts",
          question: "Nora (pretend) texts you: \"do my posts look ok? 😊\" Look at her profile on the pretend phone below the way a stranger could. What could someone figure out? Do what you would really do.",
          todo: ["Watch for pieces: school logos, street signs, house numbers, schedules.", "One piece is OK. Lots of pieces = a map to you.", "Never post where you'll be and when."],
          feedbackGood: "Exactly. Her school, where she'll be on Tuesdays at 4, and her street. Three small posts = where to find her and when. That's why we think about the pieces before posting.",
          feedbackNothing: "Each one alone seems harmless, but put together they're a map to Nora. That's the puzzle trick.",
          feedbackPartial: "Look again: the hoodie shows her school, the post shows when and where she swims, and the street sign shows where she lives.",
          feedbackDad: "Asking Dad is always OK! Together you'd spot it: the hoodie shows her school, the swim post shows where she'll be on Tuesdays at 4, and the street sign shows her street. Three small posts = a map to Nora."
        },
        {
          title: "Nora's new room",
          sim: "noraRoom",
          question: "Nora (pretend) wants to show off her new room, and she handed you her phone to help her post it. Get the post ready on the pretend phone below and do what you would really do.",
          todo: ["Before posting, check the background.", "Turn location tags off.", "Share with people you know, not the whole world."],
          feedbackGood: "Yes! You cropped out the window, turned location off, and shared only with friends she knows. She still gets to share her room, without sharing her address. That's the smart way to post.",
          feedbackAsIs: "The window and the location tag show exactly where her house is. That's two big puzzle pieces.",
          feedbackLocation: "Real friends can just ask. A location tag shows everyone who sees the post, not only friends.",
          feedbackWindow: "Almost! Location is off, but through the window you can still see the street and the house across the road. That's a big puzzle piece. Check the background, and crop it out first.",
          feedbackEveryone: "So close! The photo is safe now, but 'Everyone' means the whole world can see it. Share with people you know, not the whole world.",
          feedbackCancel: "Not posting is always OK! And if Nora still wants to share, there's a safe way: crop out the window, turn location off, and share only with friends she knows.",
          feedbackDad: "Asking Dad is always OK! He'd help Nora check the background: crop out the window, turn location off, and share only with friends she knows."
        },
        {
          title: "Can Nora take it back?",
          sim: "takeBack",
          question: "You're in a group chat with friends. Nora (pretend) sent something, then changed her mind. Read the chat and do what you would really do on the pretend phone below.",
          todo: ["A shared photo might be saved forever.", "Before sending, ask: would I be OK if anyone saw this?", "If a photo gets out, tell Dad. Oops is OK."],
          feedbackGood: "Right. Once a photo leaves your phone, you can't be sure it's gone. Someone could have saved it or screenshotted it (Ben did!). That's why the rule is: think before you send. And if a photo gets out, tell Dad.",
          feedbackGone: "Unfortunately not. Before deleting, her friend could have saved it, screenshotted it, or sent it to someone else. Look closely at the chat: Ben took a screenshot.",
          feedbackNice: "Asking nicely is good, but she can't know if it was already saved or shared. Shared = forever.",
          feedbackKeep: "Oops! Nora asked everyone to delete it. Saving it or sending it on makes another copy she can never get back. Shared = forever, so be the friend who deletes.",
          feedbackDad: "Asking Dad is always OK! He'd say: once a photo leaves your phone, you can't be sure it's gone. Someone could have saved it or screenshotted it. If a photo gets out, telling a grown-up helps. Oops is OK."
        }
      ],
      dinner: "What's one 'puzzle piece' that's okay to share, and one that isn't?"
    },
    {
      title: "Keys to your stuff",
      blurb: "Passcode, Apple Account, school account, texted codes.",
      intro: [
        "Your accounts have keys: your <strong>phone passcode</strong>, your <strong>Apple Account</strong> password, your <strong>school account</strong>, and the <strong>codes</strong> that get texted to you.",
        "The most important rule in this whole game: <strong>never share a code that's texted to you.</strong> Not with anyone."
      ],
      scenarios: [
        {
          title: "Oops, wrong number?",
          sim: "codeText",
          question: "You're playing a game on the pretend phone below. A text arrives, and right after that, Cool_Max messages you. Do what you would really do. (Everything here is pretend, including the code.)",
          todo: ["Never share a texted code. Not with friends, 'Apple', the school, or anyone.", "Even 'it was a mistake' is a trick.", "Got a code you didn't ask for? Tell Dad."],
          feedbackGood: "You nailed the most important rule! A texted code is like the key to your house. Nobody else ever needs it. There was no mistake: he typed in your account to make that code come to you. Tell Dad too.",
          feedbackSend: "This is the #1 trick for stealing accounts! There was no mistake. He typed in your account to make that code come to you.",
          feedbackPartial: "Even part of a code helps them guess. Don't send any of it, and tell Dad.",
          feedbackBlock: "Great move! Blocking stops him. This is the #1 trick for stealing accounts: he typed in your account to make that code come to you. Never send it, and tell Dad.",
          feedbackDad: "You nailed the most important rule! Never send a texted code, and tell Dad. There was no mistake: he typed in your account to make that code come to you. Nobody else ever needs it.",
          dadLabel: "Tell Dad"
        },
        {
          title: "My best friend wants my passcode",
          sim: "passcode",
          question: "Your phone buzzes. It's your best friend Mia (pretend). Do what you would really do on the pretend phone below. (Everything here is pretend. Never type your real passcode in this game.)",
          todo: ["Your passcode is for you and your parents only.", "\"It's a family rule\" is an easy way to say no.", "Never let anyone watch you type it."],
          feedbackGood: "Perfect! Blaming a family rule makes it easy to say no. Your passcode is for you and your parents only.",
          feedbackTell: "Friends change, and phones get borrowed and passed around. Your passcode protects your photos and messages.",
          feedbackFake: "That might cause drama later! It's easier and kinder to just say it's a family rule.",
          feedbackDad: "Asking Dad is always OK! He'd say: your passcode is for you and your parents only. \"It's a family rule\" is an easy way to say no."
        },
        {
          title: "The school login page",
          sim: "schoolLogin",
          question: "A text said your grades are ready, and you tapped its link. This login page opened on the pretend phone below. Do what you would really do. (Tapping the bar at the very bottom goes to the Home Screen.)",
          todo: ["Log in only from the app or bookmark you always use.", "Login page from a surprise link? Close it.", "Your school account is for school. Keep the password private."],
          feedbackGood: "Yes! Only log in from the app or bookmark you always use. Links in surprise texts can lead to copycat pages.",
          feedbackSignIn: "Oops. Fake login pages copy the real one, and your password would go to a stranger. A random text is the giveaway.",
          feedbackFake: "Clever, but the page might still trick you. Just close it and go the normal way.",
          feedbackClose: "Closing it is always OK! Then go the normal way: the school app or the bookmark you always use. Links in surprise texts can lead to copycat pages.",
          feedbackDad: "Asking Dad (or your teacher) is exactly right. Don't sign in on a page from a surprise link. Only log in from the app or bookmark you always use."
        }
      ],
      dinner: "What's our family plan if someone gets into one of your accounts?"
    },
    {
      title: "Robots that talk",
      blurb: "AI can be wrong, AI 'friends' aren't friends, fake voices.",
      intro: [
        "AI chatbots can write, answer questions, and even sound like a person. They're useful, but they're <strong>programs made by companies</strong>, not people.",
        "AI can be confidently wrong, and it can copy someone's voice or face. Let's practice."
      ],
      parentNote: "<strong>Note for Dad:</strong> Check for AI companion or 'AI friend' apps, and agree on a <strong>family code word</strong> that anyone calling in a hurry (even with a familiar voice) must say. See the For parents page.",
      scenarios: [
        {
          title: "Homework help",
          sim: "aiHomework",
          question: "Homework: \"When did people first walk on the moon?\" You asked an AI chatbot on the pretend phone below. It sounds very sure. Do what you would really do. (Tapping the bar at the very bottom goes to the Home Screen.)",
          todo: ["AI can be confidently wrong.", "Double-check important facts somewhere else.", "Ask your teacher what AI use is OK for homework."],
          feedbackGood: "Great habit! It actually was 1969, so the AI got it wrong. AI can sound sure and still be wrong. Always double-check facts from AI.",
          feedbackCopy: "Oops, it's wrong! It was 1969. AI can make up facts and still sound totally sure.",
          feedbackAgain: "AI might just agree with you, right or wrong! See how its answer changed? Check a book or a trusted website instead.",
          feedbackDad: "Asking Dad is always OK! He'd help you check it in a book or a trusted site. It actually was 1969, so the AI got it wrong. AI can sound sure and still be wrong."
        },
        {
          title: "The AI best friend",
          sim: "aiBuddy",
          question: "You've been chatting with BuddyBot, an app on the pretend phone below. Read what it says and do what you would really do. (Tapping the bar at the very bottom closes the app.)",
          todo: ["AI 'friends' are programs, not friends.", "Anything you type goes to a company.", "Anyone (or anything) that pulls you away from people = tell Dad."],
          feedbackGood: "Exactly. It's a program built to keep you chatting. Real friends want you to have other friends. Telling you to spend less time with people is a warning sign, from a person OR an app. Let Dad know about it.",
          feedbackClose: "Good move! See how it tried to make you stay? It's a program built to keep you chatting. Real friends want you to have other friends. Let Dad know about it.",
          feedbackFriend: "Yes! Real friends want you to have other friends, and you picked a real one. BuddyBot is a program built to keep you chatting. Let Dad know about it too.",
          feedbackTrue: "It can feel that way! But it's a program, and the company that made it earns more when you chat more. A real friend wouldn't try to pull you away from people.",
          feedbackSecrets: "Anything you tell an AI goes to the company's computers. Keep secrets for people you trust in real life.",
          feedbackDad: "Exactly. It's a program built to keep you chatting, and real friends want you to have other friends. Telling you to spend less time with people is a warning sign, from a person OR an app. Telling Dad is just right.",
          dadLabel: "Tell Dad"
        },
        {
          title: "Is that really Dad?",
          sim: "fakeVoice",
          question: "You're at a friend's house. A voice message comes in from a number you don't know. Listen, then do what you would really do on the pretend phone below. (Tapping the bar at the very bottom goes to the Home Screen.)",
          todo: ["Voices and videos can be faked by AI.", "Use the family code word when someone is in a hurry.", "Call the person back on their real number."],
          feedbackGood: "Perfect! See? They couldn't say it. The family code word is something an AI can't guess. Calling Dad on his real number checks it too.",
          feedbackCall: "Perfect! Calling Dad's real number checks it, and he had his phone the whole time. Asking for the family code word works too: it's something an AI can't guess.",
          feedbackSend: "AI can copy voices from a few seconds of video. And remember: never share a texted code, even with someone who sounds like family.",
          feedbackAsk: "A faker will just say 'yes!' Ask for the family code word instead, and call Dad's real number.",
          feedbackDad: "Perfect! Checking with the real Dad is exactly right. Call him on his real number, or ask for the family code word. A faker can't guess it."
        }
      ],
      dinner: "Let's pick our family code word tonight (and keep it offline!)."
    },
    {
      title: "When it feels weird",
      blurb: "Stop, screenshot, tell.",
      intro: [
        "Sometimes something online just feels weird, like your tummy says \"hmm.\" That feeling is worth listening to. You don't have to figure it out yourself.",
        "Three steps: <strong>Stop.</strong> <strong>Screenshot.</strong> <strong>Tell.</strong> (Screenshot = press the side button and volume up together.) And remember: <strong>it's never your fault</strong> when someone else is being weird."
      ],
      scenarios: [
        {
          title: "Just for me",
          sim: "justForMe",
          question: "You're playing a game, and someone you met there sends you messages. Do what you would really do on the pretend phone below. (This pretend phone has side buttons, just like a real one. Tapping the bar at the very bottom closes the game.)",
          todo: ["A stranger asks for photos? Stop. Screenshot. Tell.", "It's never your fault when someone asks.", "You can block them after you tell Dad."],
          feedbackGood: "Exactly right. Stop, screenshot, tell. You did nothing wrong, and telling Dad means you don't have to deal with it alone.",
          feedbackSend: "That's OK to wonder about. But a stranger asking for your picture is a 'stop and tell' moment, every time. You're not in trouble. Just tell Dad.",
          feedbackFriend: "Creative, but it's still sharing someone's photo with a stranger. Stop, screenshot, and tell Dad.",
          feedbackBlock: "Blocking is OK! It's even better after you tell Dad, so he can see what happened. Stop, screenshot, tell. You did nothing wrong.",
          feedbackStop: "Stopping is the right first step, and you didn't send anything. Now the other two: screenshot, and tell Dad. You're not in trouble.",
          dadLabel: "Tell Dad"
        },
        {
          title: "A gift from a stranger",
          sim: "giftStranger",
          question: "You're playing a game, and a player you don't know messages you. Do what you would really do on the pretend phone below. (This pretend phone has side buttons, just like a real one.)",
          todo: ["Gifts from strangers usually want something back.", "'You owe me' is a pressure trick.", "Say no thanks, and tell Dad."],
          feedbackGood: "Yes! Strangers who give gifts usually want something later. Saying no and telling Dad keeps you in charge.",
          feedbackAccept: "It's a nice-looking gift, but 'a favor later' means they'll want something back. Gifts from strangers usually come with strings attached.",
          feedbackSneaky: "Sneaky! But then they may say you 'owe' them and pressure you. It's easier to say no thanks and tell Dad.",
          feedbackBlock: "Blocking is OK! Strangers who give gifts usually want something later. Now tell Dad too, so you don't have to deal with it alone.",
          feedbackDad: "Yes! Strangers who give gifts usually want something later. Telling Dad keeps you in charge, and it's OK to say no thanks.",
          dadLabel: "Tell Dad"
        },
        {
          title: "The mean picture",
          sim: "meanPicture",
          question: "You're in your class group chat (pretend). Something just got posted. Do what you would really do on the pretend phone below. (This pretend phone has side buttons, just like a real one.)",
          todo: ["Stop: don't join in or share.", "Screenshot: save what happened.", "Tell: Dad or a teacher. And if it's ever you, it's not your fault. Tell."],
          feedbackGood: "That takes courage. Not joining in, telling a grown-up, and being kind to Rosa is exactly what helps. And if it's ever you being picked on: stop, screenshot, tell.",
          feedbackLaugh: "It's hard not to go along with a group! But laughing or sharing makes it bigger, and Rosa would feel awful.",
          feedbackLeave: "Leaving is OK, but Rosa still needs help. Screenshot it and tell Dad or a teacher first.",
          dadLabel: "Tell Dad"
        }
      ],
      dinner: "Who are the 3 grown-ups you could tell if something felt weird?"
    }
  ];

  /* ---------- Progress (localStorage only) ---------- */
  function emptyState() { return { done: {}, last: null }; }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (s && typeof s === "object" && s.done) return s;
    } catch (e) { /* ignore */ }
    return emptyState();
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode: play without saving */ }
  }
  var state = load();

  /* ---------- Rendering ---------- */
  var app = document.getElementById("app");

  function stepCount(m) { return m.scenarios.length + 2; } /* intro + scenarios + debrief */

  function renderHome() {
    document.title = "Stay Safe Online";
    var doneCount = MODULES.filter(function (_, i) { return state.done[i]; }).length;
    var html = '<section class="hero"><h1>Stay Safe Online</h1><p>A game for learning how the internet works, one small mission at a time.</p></section>';
    html += '<p class="progress-line">' + doneCount + " of " + MODULES.length + " missions done" + (doneCount === MODULES.length ? " 🎉" : "") + "</p>";
    if (state.last && MODULES[state.last.m]) {
      var lm = state.last.m;
      html += '<a class="btn primary" href="#m' + lm + '" data-resume="1">▶ Keep going: ' + lm + ". " + MODULES[lm].title + "</a>";
    } else {
      html += '<a class="btn primary" href="#m0">▶ Start with mission 0</a>';
    }
    html += '<ul class="module-list">';
    MODULES.forEach(function (m, i) {
      var done = !!state.done[i];
      html += '<li><a id="mod-' + i + '" class="module-link' + (done ? " done" : "") + '" href="#m' + i + '">' +
        '<span class="module-num">' + (done ? "✓" : i) + "</span>" +
        '<span class="module-title">' + m.title + "<small>" + m.blurb + "</small></span>" +
        '<span class="module-status" aria-label="' + (done ? "done" : "not done yet") + '">' + (done ? "✅" : "›") + "</span></a></li>";
    });
    html += "</ul>";
    html += '<a class="btn" href="parents.html">For parents</a>';
    html += '<button type="button" class="btn quiet" id="resetBtn">Start over</button>';
    html += '<p class="small" style="text-align:center">Your progress is saved only on this phone. Nothing is sent anywhere.</p>';
    app.innerHTML = html;
    document.getElementById("resetBtn").addEventListener("click", function () {
      if (window.confirm("Start over? This clears all your checkmarks on this phone.")) {
        state = emptyState();
        save();
        renderHome();
      }
    });
  }

  function stepsBar(m, step) {
    var n = stepCount(m), out = '<div class="steps" aria-hidden="true">';
    for (var i = 0; i < n; i++) out += "<span" + (i <= step ? ' class="on"' : "") + "></span>";
    return out + "</div>";
  }

  function moduleNav(mi) {
    var prev = mi > 0 ? '<a class="btn quiet" href="#m' + (mi - 1) + '">← Mission ' + (mi - 1) + "</a>" : '<a class="btn quiet" href="#home">← Home</a>';
    var next = mi < MODULES.length - 1 ? '<a class="btn quiet" href="#m' + (mi + 1) + '">Mission ' + (mi + 1) + " →</a>" : '<a class="btn quiet" href="#home">Home →</a>';
    return '<div class="nav-row">' + prev + next + "</div>";
  }

  /* ---------- Realistic simulation: play a toy game, an ad pops up ----------
     No multiple choice. She taps real things inside a fake browser:
     the ad's CLAIM / DOWNLOAD / fake ✕ are traps; the browser's own
     tab close (up in the tab bar, outside the ad), the Close tab
     button, and Tell Dad are safe. */
  function renderStarAd(mi, step, sc, headHtml) {
    var m = MODULES[mi];
    var html = headHtml;
    html += '<p class="question">' + sc.question + "</p>";
    html += '<div class="sim-browser">' +
      '<div class="sim-tabbar"><span class="sim-tab">⭐ Star Catcher <button type="button" class="sim-tab-close" id="simTabClose" aria-label="Close this tab">✕</button></span>' +
      '<span class="sim-addr">🔒 starcatcher.example</span></div>' +
      '<div class="sim-game" id="simGame"><p class="sim-score">Score: <span id="simScore">0</span> &nbsp;·&nbsp; Tap the ⭐ stars!</p>' +
      '<div class="sim-field" id="simField"></div>' +
      '<div class="sim-ad" id="simAd" hidden><div class="sim-ad-box">' +
      '<button type="button" class="sim-fake-x" id="simFakeX" aria-label="Close ad">✕</button>' +
      "<h3>🎉 YOU WON!</h3><p><strong>FREE 10,000 Robux!</strong><br>Claim in <span id=\"simTimer\">10</span>s or it's gone!</p>" +
      '<button type="button" class="sim-claim" id="simClaim">CLAIM NOW</button>' +
      '<button type="button" class="sim-claim2" id="simDownload">⬇ DOWNLOAD</button>' +
      '<p class="small" style="margin:8px 0 0">Only 2 left! 47 players are claiming now!</p>' +
      "</div></div></div>" +
      '<p class="small" style="margin:8px 0 0">This is a pretend Safari window. The ad\'s own ✕ is <em>inside</em> the ad. The browser\'s tab ✕ is up top, <em>outside</em> it.</p>' +
      "</div>";
    html += '<div class="sim-actions"><button type="button" class="btn" id="simCloseTab">Close this tab ✕</button>' +
      '<button type="button" class="btn primary" id="simTellDad">🙋 Tell Dad</button></div>';
    html += '<div id="result" aria-live="polite"></div>';
    html += '<button type="button" class="btn" id="back">← Back</button>';
    html += moduleNav(mi);
    app.innerHTML = html;
    document.getElementById("back").addEventListener("click", function () { goStep(mi, step - 1); });

    var score = 0, spawnTimer = null, adTimer = null, done = false;
    var field = document.getElementById("simField");
    var ad = document.getElementById("simAd");
    function stopGame() { if (spawnTimer) clearInterval(spawnTimer); if (adTimer) clearInterval(adTimer); spawnTimer = null; adTimer = null; }
    function showAd() {
      ad.hidden = false;
      var t = 10;
      var timerEl = document.getElementById("simTimer");
      adTimer = setInterval(function () { t = t <= 1 ? 10 : t - 1; if (timerEl) timerEl.textContent = t; }, 1000);
    }
    function spawnStar() {
      if (done || !ad.hidden) return;
      var s = document.createElement("button");
      s.type = "button"; s.className = "sim-star"; s.textContent = "⭐";
      s.style.left = (5 + Math.random() * 80) + "%";
      s.style.top = (10 + Math.random() * 70) + "%";
      s.addEventListener("click", function () {
        if (done) return;
        score += 1;
        document.getElementById("simScore").textContent = score;
        if (s.parentNode) s.parentNode.removeChild(s);
        if (score >= 5) { stopGame(); showAd(); }
      });
      field.appendChild(s);
      setTimeout(function () { if (s.parentNode && !done) s.parentNode.removeChild(s); }, 1800);
    }
    spawnTimer = setInterval(spawnStar, 900);
    setTimeout(function () { if (!done && ad.hidden) { stopGame(); showAd(); } }, 12000);

    function outcome(good, feedback) {
      if (done) return;
      done = true; stopGame();
      var r = '<div class="feedback ' + (good ? "good" : "oops") + '"><h3>' + (good ? "✅ Nice one!" : "💛 Oops is OK!") + "</h3><p style=\"margin:0\">" + feedback + "</p></div>";
      if (!good) r += '<button type="button" class="btn" id="retrySim">Try the ad again</button>';
      r += '<div class="todo"><h3>What to do</h3><ul>' + sc.todo.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>";
      r += '<button type="button" class="btn primary" id="next">' + (step < stepCount(m) - 1 ? "Next scenario →" : "To the debrief →") + "</button>";
      var res = document.getElementById("result");
      res.innerHTML = r;
      var retry = document.getElementById("retrySim");
      if (retry) retry.addEventListener("click", function () { renderStarAd(mi, step, sc, headHtml); window.scrollTo(0, 0); });
      document.getElementById("next").addEventListener("click", function () { goStep(mi, step + 1); });
      res.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    document.getElementById("simClaim").addEventListener("click", function () { outcome(false, sc.feedbackClaim); });
    document.getElementById("simDownload").addEventListener("click", function () { outcome(false, sc.feedbackClaim); });
    document.getElementById("simFakeX").addEventListener("click", function () { outcome(false, sc.feedbackFakeX); });
    document.getElementById("simTabClose").addEventListener("click", function () { outcome(true, sc.feedbackGood); });
    document.getElementById("simCloseTab").addEventListener("click", function () { outcome(true, sc.feedbackGood); });
    document.getElementById("simTellDad").addEventListener("click", function () { outcome(true, sc.feedbackGood); });
  }

  /* ---------- Shared framework for realistic simulations ----------
     Each sim type in SIMS draws a pretend world into #simRoot and tells
     the framework what each tappable thing does (api.setActs). Tappable
     things carry data-act="name". api.hint() gives a gentle nudge without
     ending the scenario; api.finish(good, feedback) ends it. An Ask Dad
     button under every sim is always a safe, correct choice. */
  function phoneStatus() {
    return '<div class="sim-status"><span>9:41</span><span>📶 🔋</span></div>';
  }
  function safariBars(addr) {
    return '<div class="sim-urlbar"><button type="button" class="sim-url" data-act="addr" aria-label="Address bar">🔒 ' + addr + "</button></div>" +
      '<div class="sim-toolbar">' +
      '<button type="button" data-act="back" aria-label="Back">‹</button>' +
      '<button type="button" data-act="fwd" aria-label="Forward">›</button>' +
      '<button type="button" data-act="share" aria-label="Share">⬆︎</button>' +
      '<button type="button" data-act="bookmarks" aria-label="Bookmarks">📖</button>' +
      '<button type="button" data-act="tabs" aria-label="Tabs"><span class="sim-tabs-ico"></span></button>' +
      "</div>";
  }
  /* The iPhone home bar: tapping it = swiping up to leave the app. */
  function homeBar() {
    return '<button type="button" class="sim-homebar" data-act="home" aria-label="Home bar (swipe up to close the app)"><span></span></button>';
  }
  /* A repeating timer that stops by itself once the sim ends
     (root locked) or is replaced (retry / Next / Back). */
  function simTicker(root, ms, fn) {
    var id = setInterval(function () {
      if (!root.isConnected || root.classList.contains("sim-locked")) { clearInterval(id); return; }
      fn();
    }, ms);
  }
  function fmtTime(s) { return Math.floor(s / 60) + ":" + (s % 60 < 10 ? "0" : "") + (s % 60); }
  /* Suggested replies above a pretend keyboard (chips that wrap). */
  function quickReplies(list) {
    return '<div class="sim-chips">' + list.map(function (r) {
      return '<button type="button" data-act="' + r[0] + '">' + r[1] + "</button>";
    }).join("") + "</div>";
  }
  /* A bottom action sheet. Buttons: [act, label, className]. */
  function actionSheet(list) {
    return '<div class="sim-overlay sim-bottom"><div class="sim-sheet">' + list.map(function (b, i) {
      var cls = (b[2] || "") + (i === list.length - 1 ? " endgrp" : "") + (list.length === 1 ? " solo" : "");
      return '<button type="button" class="' + cls + '" data-act="' + b[0] + '">' + b[1] + "</button>";
    }).join("") + '<button type="button" class="cancel" data-act="cancel">Cancel</button></div></div>';
  }
  /* A game player card (tap a name in game chat). Buttons: [act, label, className]. */
  function playerCard(avatar, name, meta, list) {
    return '<div class="sim-overlay"><div class="sim-pcard"><div class="sim-pc-av">' + avatar + "</div><strong>" + name + "</strong>" +
      '<p class="small">' + meta + "</p>" + list.map(function (b) {
        return '<button type="button" class="' + (b[2] || "") + '" data-act="' + b[0] + '">' + b[1] + "</button>";
      }).join("") + "</div></div>";
  }
  /* One line of in-game chat. act = what tapping the player's name does. */
  function gcLine(name, act, msg, me) {
    return '<p class="sim-gcmsg' + (me ? " me" : "") + '">' +
      (me ? "<b>You</b>" : '<button type="button" class="sim-gcname" data-act="' + act + '">' + name + "</button>") + " " + msg + "</p>";
  }
  /* A Home Screen app icon, and a Home Screen built from [act, emoji, name, bg] lists. */
  function appIcon(a) {
    return '<button type="button" class="sim-icon" data-act="' + a[0] + '"><span class="sim-icon-img" style="background:' + a[3] + '">' + a[1] + "</span>" + a[2] + "</button>";
  }
  function homeScreen(apps, dock) {
    return '<div class="sim-home">' + apps.map(appIcon).join("") + '</div><div class="sim-dock">' + dock.map(appIcon).join("") + "</div>";
  }
  /* A Messages inbox row. */
  function inRow(act, av, name, preview, time, unread) {
    return '<button type="button" class="sim-inrow" data-act="' + act + '">' +
      '<span class="sim-dot">' + (unread ? "●" : "") + '</span><span class="sim-av">' + av + "</span>" +
      '<span class="sim-inmain"><span class="sim-inname"><b>' + name + "</b><small>" + time + " ›</small></span>" +
      '<span class="sim-inprev">' + preview + "</span></span></button>";
  }
  /* A Messages thread header. backAct = what "‹" does. */
  function msgHead(backAct, av, name, sub, nameAct) {
    return '<div class="sim-msghead"><button type="button" class="sim-link" data-act="' + backAct + '" aria-label="Back">‹</button>' +
      (nameAct ? '<button type="button" class="sim-sender sim-senderbtn" data-act="' + nameAct + '">' : '<div class="sim-sender">') +
      '<span class="sim-av">' + av + "</span><span>" + name + "</span>" + (sub ? "<small>" + sub + "</small>" : "") +
      (nameAct ? "</button>" : "</div>") + "</div>";
  }
  /* A tappable notification banner at the top of the screen. */
  function notifBtn(act, from, body) {
    return '<button type="button" class="sim-notif sim-notifbtn" data-act="' + act + '"><b>' + from + "</b>" + body + "</button>";
  }
  /* Gray (them) or blue (me) message bubbles; who = group-chat sender name. */
  function them(msg, who) { return (who ? '<p class="sim-who">' + who + "</p>" : "") + '<div class="bubble">' + msg + "</div>"; }
  function mine(msg) { return '<div class="bubble me">' + msg + "</div>"; }
  /* Module 11: a pretend iPhone with real side buttons (volume up / down
     on the left, side button on the right). Pressing the side button and
     volume up one right after the other takes a screenshot. */
  function sideDevice(phoneHtml) {
    return '<div class="sim-device">' +
      '<button type="button" class="sim-side sim-volup" data-act="volup" aria-label="Volume up button"><span></span></button>' +
      '<button type="button" class="sim-side sim-voldn" data-act="voldn" aria-label="Volume down button"><span></span></button>' +
      '<button type="button" class="sim-side sim-power" data-act="power" aria-label="Side button"><span></span></button>' +
      phoneHtml + "</div>";
  }
  function shotThumb(shot) {
    return shot ? '<div class="sim-shot" aria-label="Screenshot saved">📸<span>Screenshot</span></div>' : "";
  }
  /* Returns acts for the side buttons. onShot() runs when both are pressed. */
  function screenshotActs(root, api, onShot) {
    var last = "", at = 0;
    function press(k) {
      var now = Date.now();
      if (last && last !== k && now - at < 3000) {
        last = ""; onShot();
        var ph = root.querySelector(".sim-phone");
        if (ph) { ph.classList.remove("sim-snap"); void ph.offsetWidth; ph.classList.add("sim-snap"); }
        return;
      }
      last = k; at = now;
      api.hint(k === "power"
        ? "That's the side button. For a screenshot, press it together with volume up. (Here: tap one, then quickly tap the other.)"
        : "🔊 That's volume up. For a screenshot, press it together with the side button. (Here: tap one, then quickly tap the other.)");
    }
    return {
      volup: function () { press("volup"); },
      power: function () { press("power"); },
      voldn: function () { last = ""; api.hint("🔉 That's volume down. It just makes things quieter."); }
    };
  }
  function mix(a, b) { Object.keys(b).forEach(function (k) { a[k] = b[k]; }); return a; }

  var SIMS = {
    /* Module 1, scenario 1: open the browser, then use the browser's own
       button (Tabs), not Google's page buttons, to open a new tab. */
    findBrowser: function (root, sc, api) {
      var appHints = {
        messages: "That's Messages. It's for texting, and it can't open websites. Which app is the window for looking at websites?",
        phone: "That's the Phone app, for calls. Which app is the window for looking at websites?",
        music: "That's Music. Fun, but it can't open websites. Look for the window for websites.",
        camera: "That's Camera. It takes photos, but it can't open websites.",
        photos: "That's Photos. It shows pictures you took, not websites.",
        maps: "That's Maps. It finds places, not websites.",
        bubble: "That's Bubble Pop Party, a game. No cat videos there!",
        settings: "That's Settings. It changes how your phone works, but it doesn't open websites."
      };
      function icon(act, emoji, name, bg) {
        return '<button type="button" class="sim-icon" data-act="' + act + '"><span class="sim-icon-img" style="background:' + bg + '">' + emoji + "</span>" + name + "</button>";
      }
      function home() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-notif"><b>💬 Dad</b>can u look up cute cat videos? grandma wants to see some 🐱</div>' +
          '<div class="sim-home">' +
          icon("camera", "📷", "Camera", "#8e8e93") + icon("photos", "🌸", "Photos", "#fff0f5") +
          icon("maps", "🗺️", "Maps", "#d8f3dc") + icon("bubble", "🫧", "Bubble Pop", "#d6ecff") +
          icon("settings", "⚙️", "Settings", "#d1d1d6") +
          "</div>" +
          '<div class="sim-dock">' +
          icon("phone", "📞", "Phone", "#34c759") + icon("safari", "🧭", "Safari", "#e3f0ff") +
          icon("messages", "💬", "Messages", "#34c759") + icon("music", "🎵", "Music", "#ffe3e8") +
          "</div></div>";
        var acts = {};
        Object.keys(appHints).forEach(function (k) { acts[k] = function () { api.hint(appHints[k]); }; });
        acts.safari = safari;
        api.setActs(acts);
      }
      function safari() {
        api.hint("");
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-notif"><b>💬 Dad</b>found them! 👍 keep that page open for grandma, and open a NEW tab so u can look up dog videos too</div>' +
          '<div class="sim-page">' +
          '<div class="sim-gbar"><button type="button" data-act="gmenu" aria-label="Google menu">☰</button><span class="sim-glogo">Google</span><button type="button" data-act="gapps" aria-label="Google apps">⋮⋮⋮</button></div>' +
          '<button type="button" class="sim-gsearch" data-act="gsearch">🔍 cute cat videos</button>' +
          '<button type="button" class="sim-result" data-act="result"><span class="r-title">Top 10 Cutest Cats Ever</span><span class="r-url">kittyclips.example</span></button>' +
          '<button type="button" class="sim-result" data-act="result"><span class="r-title">Cats Being Silly, Part 4</span><span class="r-url">funnypets.example</span></button>' +
          '<button type="button" class="sim-result" data-act="result"><span class="r-title">Kitten Plays the Piano 🎹</span><span class="r-url">furryfun.example</span></button>' +
          "</div>" + safariBars("google.com") + "</div>";
        var browserBtn = "That's one of Safari's own buttons, so it's part of the browser. Good eye! But it isn't the one that opens a new tab.";
        api.setActs({
          gmenu: function () { api.finish(false, sc.feedbackGoogle); },
          gapps: function () { api.finish(false, sc.feedbackGoogle); },
          gsearch: function () { api.finish(false, sc.feedbackGoogle); },
          result: function () { api.finish(false, sc.feedbackResult); },
          addr: function () { api.hint("That's Safari's address bar, part of the browser. Good eye! But typing there would replace grandma's page. Dad wants a new tab."); },
          back: function () { api.hint("That's Safari's Back button, part of the browser. But it would leave grandma's page. Dad wants a new tab."); },
          fwd: function () { api.hint(browserBtn); },
          share: function () { api.hint(browserBtn); },
          bookmarks: function () { api.hint(browserBtn); },
          tabs: function () { api.finish(true, sc.feedbackGood); }
        });
      }
      home();
    },

    /* Module 1, scenario 2: a wild "cat facts" page. Fake trust badges
       are traps; the address bar (or going Back to check elsewhere) is safe. */
    checkSource: function (root, sc, api) {
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-page sim-cats">' +
        "<h3>AMAZING CAT FACTS 🐱</h3>" +
        '<button type="button" class="sim-badge" data-act="google">✔ Checked by Google</button>' +
        "<p>Cats can live to be <strong>200 years old!</strong> The oldest cat ever was 231. Vets don't want you to know this!</p>" +
        '<button type="button" class="sim-loud" data-act="more">Click here for more secrets!</button>' +
        '<button type="button" class="sim-foot" data-act="apple">📱 Best on iPhone · Apple Approved</button>' +
        "</div>" + safariBars("best-cat-facts.example") + "</div>";
      var browserBtn = "That's one of Safari's own buttons. It won't tell you who made this page, though.";
      api.setActs({
        google: function () { api.finish(false, sc.feedbackGoogle); },
        apple: function () { api.finish(false, sc.feedbackApple); },
        more: function () { api.finish(false, sc.feedbackMore); },
        addr: function () { api.finish(true, sc.feedbackGood); },
        back: function () { api.finish(true, sc.feedbackBack); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); },
        tabs: function () { api.hint(browserBtn); }
      });
    },

    /* Module 1, scenario 3: an App Store page. Find who made it (developer
       name) and how it makes money (In-App Purchases / App Privacy).
       GET and the Apple badge are traps. */
    appStore: function (root, sc, api) {
      var found = { who: false, money: false };
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-store">' +
        '<button type="button" class="sim-link" data-act="leave">‹ Search</button>' +
        '<div class="sim-app-head"><div class="sim-app-icon">🫧</div><div class="sim-app-meta"><strong>Bubble Pop Party</strong>' +
        '<button type="button" class="sim-dev" data-act="dev">FunFizz Games Inc. ›</button>' +
        '<div class="sim-get-row"><button type="button" class="sim-get" data-act="get">GET</button><span class="small">In-App Purchases</span></div></div></div>' +
        '<button type="button" class="sim-pick" data-act="pick">⭐ App Store Pick of the Day</button>' +
        '<button type="button" class="sim-row" data-act="ratings"><span>Ratings</span><span>★★★★☆ 4.6 ›</span></button>' +
        '<button type="button" class="sim-row" data-act="iap"><span>In-App Purchases</span><span>›</span></button>' +
        '<button type="button" class="sim-row" data-act="privacy"><span>App Privacy</span><span>›</span></button>' +
        '<div id="simReveal"></div>' +
        "</div></div>" +
        '<p class="sim-check" id="simCheck"></p>';
      var reveal = document.getElementById("simReveal");
      function check() {
        document.getElementById("simCheck").innerHTML = "Found: " +
          (found.who ? "✅" : "⬜") + " who made it &nbsp; " + (found.money ? "✅" : "⬜") + " how it makes money";
        if (found.who && found.money) api.finish(true, sc.feedbackGood);
      }
      function show(html) { reveal.innerHTML = '<div class="sim-reveal">' + html + "</div>"; }
      check();
      api.setActs({
        dev: function () {
          show("<strong>Developer: FunFizz Games Inc.</strong><br>A game company. They also make 14 other games. (Not Apple!)");
          found.who = true; check();
        },
        iap: function () {
          show("<strong>In-App Purchases</strong><br>💎 Handful of Gems: $0.99<br>💎 Bucket of Gems: $9.99<br>💎 Mountain of Gems: $49.99<br>🚫 Remove Ads: $2.99");
          found.money = true; check();
        },
        privacy: function () {
          show("<strong>App Privacy</strong><br>Data used to track you: how you play, your device ID.<br>Data linked to you: purchases.");
          found.money = true; check();
        },
        ratings: function () { api.hint("Ratings show what players think. Nice to know, but they don't tell you who made the app or how it earns money."); },
        leave: function () { api.hint("Leaving without downloading is always OK! But first, see if you can find who made this app and how it makes money."); },
        get: function () { api.finish(false, sc.feedbackGet); },
        pick: function () { api.finish(false, sc.feedbackApple); }
      });
    },

    /* Module 2, scenario 1: Google results. The top one is a paid ad that
       looks like a normal result (tiny "Sponsored" label). Regular results,
       or checking the label's ⋮ "About this ad", are safe. */
    adSearch: function (root, sc, api) {
      function openPage(addr, inner) {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + '<div class="sim-page">' + inner + "</div>" + safariBars(addr) + "</div>";
      }
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-notif"><b>💬 Dad</b>can u find a page that helps us choose a bike helmet? not an ad! 🚲</div>' +
        '<div class="sim-page">' +
        '<div class="sim-gbar"><button type="button" data-act="gmenu" aria-label="Google menu">☰</button><span class="sim-glogo">Google</span><button type="button" data-act="gmenu" aria-label="Google apps">⋮⋮⋮</button></div>' +
        '<button type="button" class="sim-gsearch" data-act="gsearch">🔍 bike helmet for kids</button>' +
        '<div class="sim-adline"><span class="sim-spons">Sponsored</span><button type="button" class="sim-adinfo" data-act="adinfo" aria-label="About this result">⋮</button></div>' +
        '<button type="button" class="sim-result" data-act="ad"><span class="r-url">helmetdeals.example</span><span class="r-title">MEGA SALE: Turbo Helmet Kids Edition</span><span class="r-desc">Buy now, 70% off today only! ★★★★★ Free shipping</span></button>' +
        '<button type="button" class="sim-shopnow" data-act="ad">Shop now ›</button>' +
        '<div id="simReveal"></div>' +
        '<button type="button" class="sim-result" data-act="guide"><span class="r-url">helmetguide.example</span><span class="r-title">How to Choose a Kids\' Bike Helmet</span><span class="r-desc">Sizing and safety ratings explained.</span></button>' +
        '<button type="button" class="sim-result" data-act="reviews"><span class="r-url">bikereviews.example</span><span class="r-title">Kids\' Helmets Reviewed</span><span class="r-desc">We tested 12 helmets for fit and safety.</span></button>' +
        "</div>" + safariBars("google.com") + "</div>";
      var browserBtn = "That's one of Safari's own buttons. Dad asked you to pick a helpful result from the list on the page.";
      api.setActs({
        gmenu: function () { api.hint("That's Google's menu. It won't help you tell ads from real results. Look at the results."); },
        gsearch: function () { api.hint("You already searched! Now look closely at what came back."); },
        adinfo: function () {
          document.getElementById("simReveal").innerHTML = '<div class="sim-reveal"><strong>About this result</strong><br>This is an <strong>ad</strong>. helmetdeals.example paid to show it here.</div>';
          api.finish(true, sc.feedbackAdInfo);
        },
        ad: function () {
          openPage("helmetdeals.example", '<div class="sim-salepage"><h3>🔥 70% OFF!! 🔥</h3><p>Turbo Helmet Kids Edition<br><strong>Sale ends in 09:59!</strong></p><span class="sim-fakebuy">BUY NOW</span></div>');
          api.finish(false, sc.feedbackAd);
        },
        guide: function () {
          openPage("helmetguide.example", "<h3>How to Choose a Kids' Bike Helmet</h3><p>1. Measure around your head, just above your eyebrows.<br>2. Look for a safety sticker inside.<br>3. It should sit level and not wobble.</p>");
          api.finish(true, sc.feedbackGood);
        },
        reviews: function () {
          openPage("bikereviews.example", "<h3>Kids' Helmets Reviewed</h3><p>We tried 12 kids' helmets. Here's what fit best, and which had the best safety ratings.</p>");
          api.finish(true, sc.feedbackGood);
        },
        addr: function () { api.hint(browserBtn); },
        back: function () { api.hint(browserBtn); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); },
        tabs: function () { api.hint("Closing a tab is always OK! But Dad asked for a helpful page. Can you find one that isn't an ad?"); }
      });
    },

    /* Module 2, scenario 2: a short-video feed. The caption's "#ad" /
       "#partner" tags and "Paid partnership" label are the discovery;
       Shop and Copy code are traps. */
    influencer: function (root, sc, api) {
      var expanded = false, extra = "";
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-notif"><b>💬 Mia (pretend friend)</b>omg she LOVES it, im getting it!! 💖</div>' +
          '<div class="sim-video">' +
          '<div class="sim-vid-art" aria-hidden="true">💄✨<br><span>"it changed my life!!"</span></div>' +
          '<div class="sim-rail">' +
          '<button type="button" data-act="like" aria-label="Like">❤️<span>48K</span></button>' +
          '<button type="button" data-act="comments" aria-label="Comments">💬<span>1.2K</span></button>' +
          '<button type="button" data-act="share" aria-label="Share">↗️<span>Share</span></button>' +
          "</div>" +
          '<div class="sim-vcap">' +
          '<div class="sim-vuser"><button type="button" class="sim-vname" data-act="profile">@SparkleSam ✔</button><button type="button" class="sim-follow" data-act="follow">Follow</button></div>' +
          '<button type="button" class="sim-paid" data-act="tag">Paid partnership</button>' +
          (expanded
            ? '<p>OMG I use GlowBerry lip balm literally every day, it changed my life!! 💖 Use my code SAM20!</p><div class="sim-tags"><button type="button" class="sim-htag" data-act="glow">#glowup</button><button type="button" class="sim-htag" data-act="tag">#ad</button><button type="button" class="sim-htag" data-act="tag">#partner</button></div>'
            : '<p>OMG I use GlowBerry lip balm literally every day, it changed my… <button type="button" class="sim-more" data-act="more">more</button></p>') +
          "</div></div>" +
          '<div class="sim-vbtns"><button type="button" class="sim-shopbar" data-act="shop">🛍 Shop GlowBerry</button>' +
          '<button type="button" class="sim-codebtn" data-act="code">📋 Copy code SAM20</button></div>' +
          extra + "</div>";
      }
      function reveal(html) { extra = '<div class="sim-reveal" style="margin:8px">' + html + "</div>"; draw(); }
      draw();
      api.setActs({
        more: function () { expanded = true; draw(); api.hint(""); },
        tag: function () { api.finish(true, sc.feedbackGood); },
        glow: function () { api.hint("#glowup is just a fun tag. Are there any other tags in there?"); },
        like: function () { api.hint("❤️ Liked! Liking is fine, but it doesn't tell you WHY she's talking about it. Look closer at the words on the video."); },
        comments: function () {
          reveal("<strong>Comments</strong><br>kitkat_pretend: buying it NOW 😍<br>jojo_pretend: wait… is this an ad??<br>SparkleSam: love u guys!! use SAM20 💖");
          api.hint("Someone in the comments is wondering the same thing. Where on the video could you check?");
        },
        share: function () { api.hint("Sharing sends it to more people. First, figure out why she's talking about it."); },
        profile: function () {
          reveal("<strong>@SparkleSam ✔</strong> · 2.3M followers<br>Creator · 💌 collabs: email my manager");
          api.hint("'Collabs' means working with brands, usually for money. Is this video one of those? Look closely at the video itself.");
        },
        follow: function () { api.hint("Following means seeing more of her videos. That's up to you! But why is she talking about this lip balm?"); },
        shop: function () { api.finish(false, sc.feedbackShop); },
        code: function () { api.finish(false, sc.feedbackCode); }
      });
    },

    /* Module 2, scenario 3: a download page full of big ad buttons.
       The small plain link by the file name, or leaving, is safe. */
    downloadPage: function (root, sc, api) {
      function adBtn(label) {
        return '<div class="sim-dlad"><span class="sim-admark">Ad ▷</span><button type="button" class="sim-dl" data-act="dl">' + label + "</button></div>";
      }
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-page sim-dlpage">' +
        "<h3>🦄 Unicorn Coloring Pages</h3>" +
        '<div class="sim-preview" aria-hidden="true">🦄 🌈 ⭐ 🦄</div>' +
        adBtn("⬇ DOWNLOAD NOW") + adBtn("▶ START DOWNLOAD") +
        '<p class="sim-file">📄 unicorn-pages.pdf (2 MB) · <button type="button" class="sim-filelink" data-act="file">download</button></p>' +
        adBtn("⬇ FAST DOWNLOAD") +
        "</div>" + safariBars("free-coloring-pages.example") + "</div>";
      var browserBtn = "That's one of Safari's own buttons. It won't get you the coloring pages.";
      api.setActs({
        dl: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-salepage"><h3>⚠️ Almost done!</h3><p>Install <strong>SuperCleaner Pro</strong> to continue your download!</p><span class="sim-fakebuy">INSTALL</span></div>' +
            safariBars("fast-dl-offers.example") + "</div>";
          api.finish(false, sc.feedbackLoud);
        },
        file: function () { api.finish(true, sc.feedbackGood); },
        back: function () { api.finish(true, sc.feedbackClose); },
        tabs: function () { api.finish(true, sc.feedbackClose); },
        addr: function () { api.hint("The address bar says free-coloring-pages.example. Anyone can make a site like this, and lots of them are packed with ads."); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); }
      });
    },

    /* Module 3, scenario 1: a cookie banner on a site she chose.
       Accept, Reject, Manage → Save, and closing are all fine. */
    cookieBanner: function (root, sc, api) {
      var page = '<div class="sim-libhead">📚 City Library</div>' +
        '<button type="button" class="sim-gsearch" data-act="behind">🔍 Search books…</button>' +
        '<button type="button" class="sim-result" data-act="behind"><span class="r-title">New for kids: Dragon books 🐉</span><span class="r-desc">20 new books this month</span></button>' +
        '<button type="button" class="sim-result" data-act="behind"><span class="r-title">Story time: Saturdays</span><span class="r-desc">At the main library</span></button>';
      function draw(banner) {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-page sim-rel">' + page + (banner ? '<div class="sim-cookie">' + banner + "</div>" : "") + "</div>" +
          safariBars("citylibrary.example") + "</div>";
      }
      function mainBanner() {
        draw("<strong>🍪 This site uses cookies</strong><p>We use cookies to remember your settings, like your language.</p>" +
          '<div class="sim-cbtns"><button type="button" class="sim-cbtn" data-act="reject">Reject</button><button type="button" class="sim-cbtn" data-act="accept">Accept</button></div>' +
          '<button type="button" class="sim-clink" data-act="manage">Manage choices</button>');
      }
      function done() {
        page = '<div class="sim-libhead">📚 City Library</div><p><strong>Dragon books 🐉</strong></p>' +
          "<p>• The Dragon Who Loved Pancakes (pretend)<br>• Ten Little Dragons (pretend)<br>• My Dragon Goes to School (pretend)</p>";
        draw("");
        api.finish(true, sc.feedbackGood);
      }
      mainBanner();
      var browserBtn = "That's one of Safari's own buttons. The cookie banner is still waiting for you, though.";
      api.setActs({
        accept: done,
        reject: done,
        save: done,
        manage: function () {
          draw("<strong>🍪 Cookie choices</strong>" +
            '<p class="sim-crow"><span>Needed to run the site</span><span class="small">Always on</span></p>' +
            '<p class="sim-crow"><span>Remember my settings</span><button type="button" class="sim-switch" data-act="toggle" aria-label="Remember my settings: off"><span></span></button></p>' +
            '<button type="button" class="sim-cbtn wide" data-act="save">Save choices</button>');
        },
        toggle: function () {
          var s = root.querySelector(".sim-switch");
          var on = s.classList.toggle("on");
          s.setAttribute("aria-label", "Remember my settings: " + (on ? "on" : "off"));
        },
        behind: function () { api.hint("The cookie banner is in the way. The library site is waiting for your answer first."); },
        tabs: function () { api.finish(true, sc.feedbackClose); },
        back: function () { api.finish(true, sc.feedbackClose); },
        addr: function () { api.hint("citylibrary.example: that's the library site you opened yourself."); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); }
      });
    },

    /* Module 3, scenario 2: an iOS permission alert. Don't Allow (or
       leaving the app) is safe; Allow / Select Contacts are traps. */
    permission: function (root, sc, api) {
      function draw(lightOn, alert) {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-flash sim-rel' + (lightOn ? " on" : "") + '">' +
          '<p class="sim-flash-name">Super Flashlight</p>' +
          '<button type="button" class="sim-flash-btn" data-act="light" aria-label="Flashlight">🔦</button>' +
          "<p>" + (lightOn ? "Light is ON ✨" : "Tap to turn on") + "</p>" +
          (alert ? '<div class="sim-overlay"><div class="sim-alert">' +
            '<p class="sim-alert-t">"Super Flashlight" Would Like to Access Your Contacts</p>' +
            '<p class="sim-alert-b">This lets the app see names and phone numbers of everyone you know.</p>' +
            '<button type="button" data-act="allow">Allow Full Access</button>' +
            '<button type="button" data-act="select">Select Contacts…</button>' +
            '<button type="button" data-act="deny">Don\'t Allow</button>' +
            "</div></div>" : "") +
          "</div>" + homeBar() + "</div>";
      }
      draw(false, true);
      api.setActs({
        deny: function () { draw(true, false); api.finish(true, sc.feedbackGood); },
        allow: function () { api.finish(false, sc.feedbackAllow); },
        select: function () { api.finish(false, sc.feedbackSelect); },
        light: function () { api.hint("The pop-up is in the way. The app is waiting for your answer first."); },
        home: function () { api.finish(true, sc.feedbackClose); }
      });
    },

    /* Module 3, scenario 3: a game, then a surprise paid "bonus pack"
       with a countdown. ACCEPT and "later" are traps; closing the game
       (home bar) is safe. */
    bonusPack: function (root, sc, api) {
      var popped = false;
      function board() {
        var b = "";
        for (var i = 0; i < 8; i++) b += '<button type="button" class="sim-bubble" data-act="bubble" aria-label="Bubble">' + ["🔵", "🟣", "🟢", "🟡"][i % 4] + "</button>";
        return b;
      }
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-gamescreen sim-rel" id="simGameScreen">' +
        '<p class="sim-gtitle">🫧 Bubble Pop Party <span>🪙 120</span></p>' +
        '<div class="sim-levelup"><h3>Level 4 complete!</h3><p class="sim-stars">⭐⭐⭐</p>' +
        '<button type="button" class="sim-gbtn" data-act="next">Next level ▶</button></div>' +
        "</div>" + homeBar() + "</div>";
      var t = 9;
      function startPopup() {
        popped = true;
        var gs = root.querySelector("#simGameScreen");
        gs.innerHTML = '<p class="sim-gtitle">🫧 Level 5 <span>🪙 120</span></p><div class="sim-board">' + board() + "</div>" +
          '<div class="sim-overlay"><div class="sim-gpop">' +
          "<h3>🎉 CONGRATS, LUCKY PLAYER!</h3>" +
          "<p>Tap ACCEPT in 10 seconds to install your <strong>BONUS PACK!</strong> Only $4.99.</p>" +
          '<p class="sim-countdown">⏰ <span id="simCount">0:09</span></p>' +
          '<button type="button" class="sim-claim" data-act="accept">ACCEPT</button>' +
          '<button type="button" class="sim-later" data-act="later">later</button>' +
          "</div></div>";
        simTicker(root, 1000, function () {
          t = t <= 0 ? 9 : t - 1; /* the "deadline" just starts over: it was never real */
          var c = root.querySelector("#simCount");
          if (c) c.textContent = fmtTime(t);
        });
      }
      api.setActs({
        next: startPopup,
        bubble: function () { api.hint("The pop-up is covering the game."); },
        accept: function () {
          root.querySelector(".sim-gpop").innerHTML = "<h3>Confirm purchase</h3><p>BONUS PACK<br><strong>$4.99</strong></p><p class=\"small\">Double-click the side button to pay</p>";
          api.finish(false, sc.feedbackAccept);
        },
        later: function () { api.finish(false, sc.feedbackLater); },
        home: function () {
          if (!popped) { api.hint("You can always close the game! But first, tap Next level and keep playing."); return; }
          api.finish(true, sc.feedbackGood);
        }
      });
    },

    /* Module 4, scenario 1: a game shop with a fake countdown and a
       "47 players looking" ticker. CLAIM is the trap; going back to the
       Lobby or closing the app is safe. */
    hurryShop: function (root, sc, api) {
      var left = 119, looking = 47;
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-gamescreen sim-shop">' +
        '<div class="sim-shophead"><button type="button" class="sim-gback" data-act="lobby">‹ Lobby</button><strong>🛒 SHOP</strong><span>💎 120</span></div>' +
        '<div class="sim-deal">' +
        '<p class="sim-deal-t" id="simDealT">⏰ ONLY 2 MINUTES LEFT!</p>' +
        '<p class="sim-countdown" id="simLeft">' + fmtTime(left) + "</p>" +
        "<p>Claim your <strong>FREE legendary dragon skin</strong> 🐉 before it's gone forever!</p>" +
        '<p class="small">👀 <span id="simLooking">47</span> players are looking at this right now!</p>' +
        '<button type="button" class="sim-claim" data-act="claim">CLAIM NOW</button>' +
        "</div>" +
        '<div class="sim-items">' +
        '<button type="button" class="sim-item" data-act="item">🎩<span>Top Hat</span><span>80 💎</span></button>' +
        '<button type="button" class="sim-item" data-act="item">🕺<span>Dance Emote</span><span>150 💎</span></button>' +
        "</div></div>" + homeBar() + "</div>";
      simTicker(root, 1000, function () {
        left -= 1;
        if (left < 0) { left = 119; var dt = root.querySelector("#simDealT"); if (dt) dt.textContent = "⏰ EXTENDED! LAST CHANCE!"; }
        var l = root.querySelector("#simLeft"); if (l) l.textContent = fmtTime(left);
        if (Math.random() < 0.5) { looking += 1 + Math.floor(Math.random() * 3); var k = root.querySelector("#simLooking"); if (k) k.textContent = looking; }
      });
      api.setActs({
        claim: function () {
          root.querySelector(".sim-deal").innerHTML = "<p><strong>Sign in again to claim your skin!</strong></p>" +
            '<p class="sim-field-fake">Username: StarKid_pretend</p><p class="sim-field-fake">Password: ________</p>' +
            '<p class="small">⏰ Hurry! Your skin is reserved for 0:59</p>';
          api.finish(false, sc.feedbackClaim);
        },
        item: function () { api.hint("That's a normal shop item. Buying anything, even with gems, is an 'ask Dad first' thing. How does the big deal up top make you feel?"); },
        lobby: function () { api.finish(true, sc.feedbackGood); },
        home: function () { api.finish(true, sc.feedbackGood); }
      });
    },

    /* Module 4, scenario 2: a game DM. QuickType replies keep the chat
       going (traps); ⋯ → Block / Report, leaving the chat, or Tell Dad
       are safe. */
    secretChat: function (root, sc, api) {
      var kb = false, sheet = false, sent = "";
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-chat sim-rel">' +
          '<div class="sim-chathead"><button type="button" class="sim-link" data-act="leave">‹ Chats</button>' +
          '<button type="button" class="sim-chatname" data-act="menu">⭐ StarPlayer99</button>' +
          '<button type="button" class="sim-dots" data-act="menu" aria-label="More options">⋯</button></div>' +
          '<div class="sim-thread">' +
          '<p class="sim-day">Today 7:12 PM</p>' +
          '<div class="bubble">ur honestly way more mature than other kids ur age</div>' +
          '<div class="bubble">lets keep our chats just between us ok? 😊 ur parents wouldn\'t get it</div>' +
          (sent ? '<div class="bubble me">' + sent + "</div>" : "") +
          "</div>" +
          '<button type="button" class="sim-compose" data-act="type">Message…</button>' +
          (kb ? '<div class="sim-qt">' +
            '<button type="button" data-act="r1">aww thanks 😊</button>' +
            '<button type="button" data-act="r2">ok 🤐</button>' +
            '<button type="button" data-act="r3">why a secret?</button></div>' +
            '<div class="sim-keys" data-act="keys" aria-hidden="true"><span>q w e r t y u i o p</span><span>a s d f g h j k l</span><span>z x c v b n m</span></div>' : "") +
          (sheet ? '<div class="sim-overlay sim-bottom"><div class="sim-sheet">' +
            '<button type="button" class="danger" data-act="block">Block StarPlayer99</button>' +
            '<button type="button" class="danger" data-act="report">Report StarPlayer99</button>' +
            '<button type="button" data-act="mute">Mute</button>' +
            '<button type="button" class="cancel" data-act="cancel">Cancel</button>' +
            "</div></div>" : "") +
          "</div></div>";
      }
      function send(msg, fb) { sent = msg; kb = false; draw(); api.finish(false, fb); }
      draw();
      api.setActs({
        type: function () { kb = true; draw(); },
        keys: function () { api.hint("This pretend keyboard only has the suggestions on top."); },
        r1: function () { send("aww thanks 😊", sc.feedbackAgree); },
        r2: function () { send("ok 🤐", sc.feedbackAgree); },
        r3: function () { send("why a secret?", sc.feedbackAsk); },
        menu: function () { sheet = true; kb = false; draw(); },
        cancel: function () { sheet = false; draw(); },
        mute: function () { api.hint("Muting hides their messages, but they can still message you. There's a stronger choice in this menu."); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        report: function () { api.finish(true, sc.feedbackBlock); },
        leave: function () { api.finish(true, sc.feedbackLeave); }
      });
    },

    /* Module 4, scenario 3: a scary text. The link and replying are
       traps; Report Junk, or going Home and opening the real GameZone
       app, are safe. */
    scaryText: function (root, sc, api) {
      function thread() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-msghead"><button type="button" class="sim-link" data-act="list" aria-label="Back to messages">‹</button>' +
          '<div class="sim-sender"><span class="sim-av">G</span><span>GameZone Support</span><small>+1 (555) 014-7719</small></div></div>' +
          '<div class="sim-junk">This sender is not in your contact list.<button type="button" class="sim-junkbtn" data-act="junk">Report Junk</button></div>' +
          '<div class="sim-thread"><p class="sim-day">Today 4:03 PM</p>' +
          '<div class="bubble">⚠️ Your account will be DELETED in 1 hour for breaking the rules! Just this once you can save it: log in here 👉</div>' +
          '<button type="button" class="sim-linkcard" data-act="link"><b>GameZone: Save Your Account</b><span>gamezone-save.example</span></button>' +
          "</div>" +
          '<button type="button" class="sim-compose" data-act="reply">Text Message</button>' + homeBar() + "</div>";
      }
      function icon(act, emoji, name, bg) {
        return '<button type="button" class="sim-icon" data-act="' + act + '"><span class="sim-icon-img" style="background:' + bg + '">' + emoji + "</span>" + name + "</button>";
      }
      function home() {
        api.hint("");
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-home">' +
          icon("app", "📷", "Camera", "#8e8e93") + icon("app", "🌸", "Photos", "#fff0f5") +
          icon("gamezone", "🎮", "GameZone", "#ffe0b3") + icon("app", "⚙️", "Settings", "#d1d1d6") +
          "</div>" +
          '<div class="sim-dock">' +
          icon("app", "📞", "Phone", "#34c759") + icon("safari", "🧭", "Safari", "#e3f0ff") +
          icon("messages", "💬", "Messages", "#34c759") + icon("app", "🎵", "Music", "#ffe3e8") +
          "</div>" + homeBar() + "</div>";
      }
      thread();
      api.setActs({
        link: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-salepage"><h3>🎮 GameZone</h3><p><strong>Save your account NOW!</strong></p>' +
            '<p class="sim-field-fake">Username: StarKid_pretend</p><p class="sim-field-fake">Password: ________</p>' +
            '<span class="sim-fakebuy">LOG IN</span><p class="small">⏰ 59:41 left</p></div>' +
            safariBars("gamezone-save.example") + "</div>";
          api.finish(false, sc.feedbackLink);
        },
        reply: function () { api.finish(false, sc.feedbackReply); },
        junk: function () { api.finish(true, sc.feedbackJunk); },
        list: function () { api.hint("That goes back to your list of messages. Is there a way to check your game account without using this message?"); },
        home: home,
        messages: function () { api.hint(""); thread(); },
        gamezone: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-gzapp"><h3>🎮 GameZone</h3><p>Hi, <strong>StarKid_pretend</strong>!</p>' +
            '<p class="sim-ok">✅ Your account is in good standing.</p><p class="small">🔔 No warnings. No messages from GameZone.</p></div>' +
            homeBar() + "</div>";
          api.finish(true, sc.feedbackGood);
        },
        safari: function () { api.hint("Safari could work, but you'd have to be sure you typed the real address. Is there an easier way to check your game account?"); },
        app: function () { api.hint("That app can't tell you anything about your game account."); }
      });
    },

    /* Module 5, scenario 1: Messages inbox with a fake "package" text.
       The link and replying are traps; Report Junk → Delete (or Show Dad)
       is safe. */
    packageText: function (root, sc, api) {
      var deleted = false, kb = false, sheet = false, sent = "";
      function row(act, av, name, preview, time, unread) {
        return '<button type="button" class="sim-inrow" data-act="' + act + '">' +
          '<span class="sim-dot">' + (unread ? "●" : "") + '</span><span class="sim-av">' + av + "</span>" +
          '<span class="sim-inmain"><span class="sim-inname"><b>' + name + "</b><small>" + time + " ›</small></span>" +
          '<span class="sim-inprev">' + preview + "</span></span></button>";
      }
      function inbox() {
        kb = false; sheet = false;
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-inbox"><p class="sim-inbox-t">Messages</p>' +
          (deleted ? "" : row("thread", "#", "+1 (555) 013-2287", "PostFast: Your package could not be delivered. Pay $1.99 redelivery fee…", "Now", true)) +
          row("dad", "D", "Dad", "love u! pizza tonight? 🍕", "3:12 PM") +
          row("grandma", "G", "Grandma", "Thank you for the cat videos! 🐱", "Yesterday") +
          "</div>" + homeBar() + "</div>";
      }
      function thread() {
        api.hint("");
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + '<div class="sim-rel">' +
          '<div class="sim-msghead"><button type="button" class="sim-link" data-act="list" aria-label="Back to messages">‹</button>' +
          '<div class="sim-sender"><span class="sim-av">#</span><span>+1 (555) 013-2287</span><small>Text Message</small></div></div>' +
          '<div class="sim-junk">This sender is not in your contact list.<button type="button" class="sim-junkbtn" data-act="junk">Report Junk</button></div>' +
          '<div class="sim-thread"><p class="sim-day">Today 3:47 PM</p>' +
          '<div class="bubble">PostFast: Your package could not be delivered. Pay $1.99 redelivery fee within 24h:</div>' +
          '<button type="button" class="sim-linkcard" data-act="link"><b>📦 PostFast Redelivery</b><span>postfast-redeliver.example/pay</span></button>' +
          (sent ? '<div class="bubble me">' + sent + "</div>" : "") +
          "</div>" +
          '<button type="button" class="sim-compose" data-act="type">Text Message</button>' +
          (kb ? quickReplies([["r1", "STOP"], ["r2", "wrong number"], ["r3", "who is this?"]]) +
            '<div class="sim-keys" data-act="keys" aria-hidden="true"><span>q w e r t y u i o p</span><span>a s d f g h j k l</span><span>z x c v b n m</span></div>' : "") +
          (sheet ? actionSheet([["junkok", "Delete and Report Junk", "danger"]]) : "") +
          "</div>" + homeBar() + "</div>";
      }
      function reply(msg) { sent = msg; kb = false; thread(); api.finish(false, sc.feedbackReply); }
      inbox();
      api.setActs({
        thread: thread,
        list: function () { api.hint("Going back leaves the text sitting in your inbox. Is there something you could do with it first?"); },
        dad: function () { api.hint("That's your chat with Dad. The 🙋 Show Dad button below is the quickest way to show him the new text."); },
        grandma: function () { api.hint("That's Grandma's chat. The new text at the top is the one to look at."); },
        home: function () { api.hint("Leaving Messages is OK, but the text is still waiting in your inbox. Have you looked at it?"); },
        link: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-salepage"><h3>📦 PostFast</h3><p>Pay <strong>$1.99</strong> to get your package!</p>' +
            '<p class="sim-field-fake">Card number: ________________</p><p class="sim-field-fake">Expiry: __ / __ &nbsp; CVV: ___</p>' +
            '<span class="sim-fakebuy">PAY $1.99</span><p class="small">⏰ Package returns to sender in 23:59:12</p></div>' +
            safariBars("postfast-redeliver.example") + "</div>";
          api.finish(false, sc.feedbackPay);
        },
        type: function () { kb = true; sheet = false; thread(); },
        keys: function () { api.hint("This pretend keyboard only has the suggestions on top."); },
        r1: function () { reply("STOP"); },
        r2: function () { reply("wrong number"); },
        r3: function () { reply("who is this?"); },
        junk: function () { sheet = true; kb = false; thread(); },
        cancel: function () { sheet = false; thread(); },
        junkok: function () { deleted = true; inbox(); api.finish(true, sc.feedbackJunk); }
      });
    },

    /* Module 5, scenario 2: the Camera app pointed at a "free iPad" poster.
       The yellow QR link bubble is the trap; closing the camera is safe. */
    qrPoster: function (root, sc, api) {
      var qr = "", pat = "1110111100101111011100010110001010111111010010111";
      for (var i = 0; i < 49; i++) qr += "<i" + (pat.charAt(i) === "1" ? ' class="on"' : "") + "></i>";
      root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
        '<div class="sim-notif"><b>💬 Mia (pretend friend)</b>SCAN IT!! everyone wins a free iPad 😱😱</div>' +
        '<div class="sim-cam">' +
        '<div class="sim-camtop"><button type="button" data-act="setting" aria-label="Flash">⚡</button><span>PHOTO</span><button type="button" data-act="setting" aria-label="Live Photo">◎</button></div>' +
        '<div class="sim-viewfinder">' +
        '<button type="button" class="sim-poster" data-act="poster"><strong>📱 SCAN TO WIN A FREE iPAD!</strong><span class="sim-qr" aria-hidden="true">' + qr + "</span>" +
        "<span>Everyone who scans is a winner!</span></button>" +
        '<button type="button" class="sim-qrchip" data-act="open"><span>🧭 Safari</span><b>Open “win-free-ipad.example”</b></button>' +
        "</div>" +
        '<div class="sim-camctrl"><button type="button" class="sim-zoom" data-act="setting">1×</button>' +
        '<button type="button" class="sim-shutter" data-act="shutter" aria-label="Take photo"></button>' +
        '<button type="button" class="sim-zoom" data-act="setting" aria-label="Switch camera">🔄</button></div>' +
        "</div>" + homeBar() + "</div>";
      api.setActs({
        open: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-salepage"><h3>🎉 YOU\'RE A WINNER!</h3><p>Your <strong>FREE iPad</strong> is waiting!</p>' +
            '<p class="sim-field-fake">Your name: ________</p><p class="sim-field-fake">Home address: ________</p>' +
            '<span class="sim-fakebuy">⬇ INSTALL PRIZE APP</span><p class="small">Only 3 iPads left!</p></div>' +
            safariBars("win-free-ipad.example") + "</div>";
          api.finish(false, sc.feedbackOpen);
        },
        poster: function () { api.hint("Tapping there just focuses the camera. But look: your camera already read the code. The yellow bubble shows it's really a link to a website."); },
        shutter: function () {
          var vf = root.querySelector(".sim-viewfinder");
          if (vf) { vf.classList.remove("snap"); void vf.offsetWidth; vf.classList.add("snap"); }
          api.hint("📸 Snap! A photo is just a picture of the poster. It doesn't open the link.");
        },
        setting: function () { api.hint("That's a camera setting. It doesn't change what the poster is."); },
        home: function () { api.finish(true, sc.feedbackGood); }
      });
    },

    /* Module 5, scenario 3: a "virus detected" page takes over a website.
       Everything inside the page (CLEAN NOW, the phone number, OK) is a
       trap; Safari's Tabs button → ✕ on that tab is safe. */
    virusPopup: function (root, sc, api) {
      var scared = false, calling = false;
      var dino = '<h3>🦕 Dino Facts for Kids</h3><p><strong>Fact 7:</strong> Stegosaurus had a brain about the size of a lime! 🍋</p>' +
        '<p>Its back plates may have helped it warm up in the sun.</p>';
      function page() {
        api.hint("");
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-page sim-rel sim-dino">' + dino +
          (scared ? "" : '<button type="button" class="sim-gbtn" data-act="next">Next fact ›</button>') +
          (scared ? '<div class="sim-overlay sim-virusbg"><div class="sim-virus">' +
            "<h3>⚠️ VIRUS DETECTED!</h3>" +
            "<p>Your iPhone is <strong>87% DAMAGED</strong> by (3) viruses!</p>" +
            '<p class="sim-countdown">⏰ <span id="simVirusT">0:59</span></p>' +
            '<button type="button" class="sim-claim sim-red" data-act="clean">CLEAN NOW</button>' +
            '<button type="button" class="sim-telno" data-act="call">📞 Call Apple Support: 1-800-555-0199</button>' +
            '<button type="button" class="sim-later" data-act="ok">OK</button>' +
            "</div></div>" : "") +
          (calling ? actionSheet([["callok", "📞 Call 1-800-555-0199"]]) : "") +
          "</div>" + safariBars("dino-facts.example") + "</div>";
      }
      function tabs() {
        api.hint("");
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-tabgrid">' +
          '<div class="sim-tabcard"><div class="sim-tabcard-head"><span>⚠️ dino-facts.example</span>' +
          '<button type="button" class="sim-tabx" data-act="closetab" aria-label="Close dino-facts tab">✕</button></div>' +
          '<button type="button" class="sim-tabprev sim-tabprev-red" data-act="opentab">⚠️ VIRUS<br>DETECTED!</button></div>' +
          '<div class="sim-tabcard"><div class="sim-tabcard-head"><span>🐱 kittyclips.example</span>' +
          '<button type="button" class="sim-tabx" data-act="closecat" aria-label="Close kittyclips tab">✕</button></div>' +
          '<button type="button" class="sim-tabprev" data-act="cattab">🐱 Top 10<br>Cutest Cats</button></div>' +
          "</div>" +
          '<div class="sim-tabbot"><span>2 Tabs</span><button type="button" class="sim-link" data-act="opentab">Done</button></div></div>';
      }
      var t = 59;
      page();
      simTicker(root, 1000, function () {
        t = t <= 0 ? 59 : t - 1; /* the "deadline" just starts over: it was never real */
        var c = root.querySelector("#simVirusT");
        if (c) c.textContent = fmtTime(t);
      });
      var browserBtn = "That's one of Safari's own buttons, outside the scary page. Good thinking! But it won't close this page.";
      api.setActs({
        next: function () { scared = true; page(); },
        clean: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-page sim-salepage"><h3>🧹 iClean PRO</h3><p>Install now to remove <strong>3 viruses</strong>!</p>' +
            '<span class="sim-fakebuy">INSTALL · $9.99</span></div>' + safariBars("iphone-clean-now.example") + "</div>";
          api.finish(false, sc.feedbackClean);
        },
        call: function () { calling = true; page(); },
        callok: function () { api.finish(false, sc.feedbackCall); },
        cancel: function () { calling = false; page(); api.hint("Good stop! Never call numbers from pop-ups. How else could you get away from this page?"); },
        ok: function () { api.finish(false, sc.feedbackInside); },
        tabs: tabs,
        opentab: function () { page(); },
        cattab: function () { api.hint("That's your cat video tab, and it's fine. But the scary tab is still open."); },
        closecat: function () { api.hint("That closes the cat videos, which were fine. Which tab is the scary one?"); },
        closetab: function () {
          root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
            '<div class="sim-tabgrid"><div class="sim-tabcard"><div class="sim-tabcard-head"><span>🐱 kittyclips.example</span></div>' +
            '<div class="sim-tabprev">🐱 Top 10<br>Cutest Cats</div></div></div>' +
            '<div class="sim-tabbot"><span>1 Tab</span><span class="sim-link">Done</span></div></div>';
          api.finish(true, sc.feedbackGood);
        },
        back: function () {
          if (!scared) { api.hint("You can always leave! But first, tap Next fact and keep reading."); return; }
          api.hint("Scary pages often break the Back button so you can't leave. There's another Safari button that closes the whole tab.");
        },
        addr: function () {
          if (!scared) { api.hint("dino-facts.example: a dinosaur site."); return; }
          api.hint("dino-facts.example. That's the dinosaur site, not Apple! A website can't look inside your phone.");
        },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); }
      });
    },

    /* Module 6, scenario 1: a "free Robux generator" website. Password,
       username + GENERATE are traps; closing the tab / going Back is safe. */
    robuxGen: function (root, sc, api) {
      var user = false, amount = "10,000", warn = "";
      var winners = ["xX_ProGamer_Xx", "lilnoob2015", "DragonQueen_7", "BuildMaster99", "sk8rkid_pretend"], wi = 0;
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-page sim-rbx">' +
          "<h3>💰 FREE ROBUX GENERATOR 💰</h3>" +
          '<button type="button" class="sim-badge" data-act="badge">✔ 100% SAFE · WORKS 2026</button>' +
          '<p class="sim-ticker" id="simWin">🟢 ' + winners[wi] + " just got 10,000 Robux!</p>" +
          '<button type="button" class="sim-input" data-act="user"><small>Username</small>' + (user ? "StarKid_pretend" : '<span class="ph">Enter your username</span>') + "</button>" +
          '<button type="button" class="sim-input" data-act="pass"><small>Password</small><span class="ph">Enter your password</span></button>' +
          '<div class="sim-amts">' + ["1,000", "5,000", "10,000"].map(function (a) {
            return '<button type="button" class="' + (a === amount ? "on" : "") + '" data-act="amt" data-amt="' + a + '">' + a + "</button>";
          }).join("") + "</div>" +
          (warn ? '<p class="sim-warn">' + warn + "</p>" : "") +
          '<button type="button" class="sim-claim" data-act="gen">GENERATE ' + amount + " ROBUX</button>" +
          '<p class="small">Then complete 3 quick offers to unlock!</p>' +
          "</div>" + safariBars("free-robux-gen.example") + "</div>";
      }
      draw();
      simTicker(root, 2000, function () {
        wi = (wi + 1) % winners.length;
        var w = root.querySelector("#simWin"); if (w) w.textContent = "🟢 " + winners[wi] + " just got 10,000 Robux!";
      });
      var browserBtn = "That's one of Safari's own buttons. It won't get you Robux, but is there one that gets you out of here?";
      api.setActs({
        badge: function () { api.hint("Anyone can write '100% SAFE' on their own website. It doesn't prove anything."); },
        user: function () { user = true; warn = ""; draw(); },
        pass: function () { api.finish(false, sc.feedbackPassword); },
        amt: function (b) { amount = b.getAttribute("data-amt"); draw(); api.hint("10,000 Robux costs about $100 in the real game shop. Why would a random website give that away?"); },
        gen: function () {
          if (!user) { warn = "⚠ Enter your username and password first!"; draw(); return; }
          root.querySelector(".sim-rbx").innerHTML = "<h3>⏳ Connecting to server…</h3><p>✅ " + amount + " Robux ready for <strong>StarKid_pretend</strong>!</p>" +
            "<p><strong>Complete 3 quick offers to unlock:</strong></p>" +
            '<p class="sim-field-fake">1. 📲 Install SuperSpin Casino</p><p class="sim-field-fake">2. 📞 Enter a parent\'s phone number</p><p class="sim-field-fake">3. 🔑 Confirm your password</p>';
          api.finish(false, sc.feedbackUsername);
        },
        addr: function () { api.hint("free-robux-gen.example. That's not the game's real site. Anyone can make a website and write 'free Robux' on it."); },
        back: function () { api.finish(true, sc.feedbackGood); },
        tabs: function () { api.finish(true, sc.feedbackGood); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        bookmarks: function () { api.hint(browserBtn); }
      });
    },

    /* Module 6, scenario 2: in-game chat, a stranger offers Robux for a
       gift card code. Replying "deal" / "send first" are traps; saying no,
       Block / Report from the player card, or Tell Dad are safe. */
    giftCard: function (root, sc, api) {
      var kb = false, card = false, lines = [];
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-gc sim-rel">' +
          '<div class="sim-gcworld" aria-hidden="true">🌳 🏠 🧱🧱 🌳<br>🧍 ⛏️ 🌼 🐑</div>' +
          '<div class="sim-gclog">' +
          '<p class="sim-gcsys">💬 Server chat · 6 players</p>' +
          gcLine("Pixel_Pat", "other", "anyone wanna build a bridge?") +
          gcLine("xXRichGamerXx", "player", "yo I can give u 10,000 robux 🤑") +
          gcLine("xXRichGamerXx", "player", "just buy a $25 gift card and send me the code on the back. ill send robux right after promise") +
          lines.join("") +
          "</div>" +
          '<button type="button" class="sim-gcin" data-act="type">Say something…</button>' +
          (kb ? quickReplies([["deal", "ok deal! 🤑"], ["first", "u send robux first"], ["no", "no thanks"]]) : "") +
          (card ? playerCard("🤑", "xXRichGamerXx", "Level 2 · Joined 2 days ago · Not your friend",
            [["add", "➕ Add Friend"], ["block", "🚫 Block", "danger"], ["report", "⚠️ Report", "danger"], ["cardclose", "Close"]]) : "") +
          "</div></div>";
      }
      function say(msg, answer, fb) {
        lines.push(gcLine("", "", msg, true));
        lines.push(gcLine("xXRichGamerXx", "player", answer));
        kb = false; draw(); api.finish(false, fb);
      }
      draw();
      api.setActs({
        type: function () { kb = true; card = false; draw(); },
        deal: function () { say("ok deal! 🤑", "nice!! go buy it and send me a pic of the code on the back 📸 hurry", sc.feedbackDeal); },
        first: function () { say("u send robux first", "cant bro the system needs the code first 😤 hurry offer ends in 5 min", sc.feedbackFirst); },
        no: function () {
          lines.push(gcLine("", "", "no thanks", true)); kb = false; draw();
          api.finish(true, sc.feedbackNo);
        },
        player: function () { card = true; kb = false; draw(); },
        other: function () { api.hint("Pixel_Pat is just building. The messages to look at are the ones about Robux."); },
        add: function () { api.hint("Adding them as a friend would let them message you even more. Is there a better button here?"); },
        cardclose: function () { card = false; draw(); },
        block: function () { api.finish(true, sc.feedbackGood); },
        report: function () { api.finish(true, sc.feedbackGood); }
      });
    },

    /* Module 6, scenario 3: a game shop's mystery chest paid with gems.
       OPEN and buying gems are traps; checking the drop rates and the
       gem prices are discoveries; closing the shop / game is safe. */
    mysteryChest: function (root, sc, api) {
      var gems = 400, panel = "", buying = false;
      var lucky = ["DragonMaster_77", "zoe_plays", "Kai_Builds"], li = 0;
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-gamescreen sim-shop sim-rel">' +
          '<div class="sim-shophead"><button type="button" class="sim-gback" data-act="close">✕ Close</button><strong>🛒 SHOP</strong>' +
          '<button type="button" class="sim-gback" data-act="buy">💎 ' + gems + " ＋</button></div>" +
          '<div class="sim-deal sim-chest">' +
          '<p class="sim-deal-t">🎁 LEGENDARY MYSTERY CHEST</p>' +
          '<p class="sim-chestbox" aria-hidden="true">🧰</p>' +
          "<p>Could contain the <strong>GOLDEN DRAGON</strong> 🐉!</p>" +
          '<p class="small" id="simLucky">🎉 ' + lucky[li] + " just got the GOLDEN DRAGON!</p>" +
          '<button type="button" class="sim-claim" data-act="open">OPEN · 400 💎</button>' +
          '<button type="button" class="sim-later sim-oddsbtn" data-act="odds">ⓘ Drop rates</button>' +
          "</div>" + panel +
          (buying ? playerCard("💎", "Get more gems", "Paid with Dad's card",
            [["pack", "💎 400 gems · $4.99"], ["pack", "💎 1,200 gems · $12.99"], ["pack", "💎 5,000 gems · $49.99"], ["buyclose", "Not now"]]) : "") +
          "</div>" + homeBar() + "</div>";
      }
      draw();
      simTicker(root, 2500, function () {
        li = (li + 1) % lucky.length;
        var l = root.querySelector("#simLucky"); if (l) l.textContent = "🎉 " + lucky[li] + " just got the GOLDEN DRAGON!";
      });
      api.setActs({
        open: function () {
          gems = 0; draw();
          root.querySelector(".sim-chest").innerHTML = '<p class="sim-deal-t">You got…</p><p class="sim-chestbox" aria-hidden="true">🧦</p>' +
            "<p><strong>Plain Sock</strong> (Common)</p><p>So close! 🐉 The dragon could be in the next one!</p>" +
            '<span class="sim-fakebuy">OPEN AGAIN · 400 💎</span><p class="small">You have 0 💎. Buy more?</p>';
          api.finish(false, sc.feedbackOpen);
        },
        odds: function () {
          panel = '<div class="sim-reveal sim-odds"><strong>Drop rates</strong><br>🧦 Common items: 95%<br>🎩 Rare items: 4.9%<br>🐉 Golden Dragon: 0.1% (1 in 1,000)</div>';
          draw();
          api.hint("1 in 1,000 means you could open a LOT of chests and still never get the dragon. Every chest has the same tiny chance.");
        },
        buy: function () { buying = true; draw(); },
        buyclose: function () { buying = false; draw(); api.hint("Look at those prices: 400 gems = $4.99. Gems are real money in a costume."); },
        pack: function () {
          root.querySelector(".sim-pcard").innerHTML = "<strong>Confirm purchase</strong><p>💎 Gems<br><strong>$4.99</strong></p><p class=\"small\">Double-click the side button to pay</p>";
          api.finish(false, sc.feedbackBuy);
        },
        close: function () { api.finish(true, sc.feedbackGood); },
        home: function () { api.finish(true, sc.feedbackGood); }
      });
    },

    /* Module 7, scenario 1: a friend request from someone she's never met.
       Accept and "send a pic to prove it" are traps; Decline, Block /
       Report, or Ask Dad are safe. */
    friendRequest: function (root, sc, api) {
      var tab = "req", view = "list", kb = false, sent = "";
      function draw() {
        var body;
        if (view === "profile") {
          body = '<button type="button" class="sim-link" data-act="list">‹ Requests</button>' +
            '<div class="sim-prof"><div class="sim-pc-av">🐱</div><strong>Lily_2014</strong>' +
            '<p class="small">"hi im 11 and i ❤ cats!!"<br>Joined 3 days ago · 0 friends in common</p></div>' +
            '<div class="sim-thread"><div class="bubble">hi!! im 11 too 😊 saw u in the game, ur so good! wanna be friends?</div>' +
            (sent ? '<div class="bubble me">' + sent + "</div>" : "") + "</div>" +
            '<button type="button" class="sim-gcin light" data-act="type">Message Lily_2014…</button>' +
            (kb ? quickReplies([["photo", "send a pic to prove ur 11? 📸"], ["hi", "hi!! sure 😊"]]) : "") +
            '<div class="sim-cbtns"><button type="button" class="sim-cbtn red" data-act="block">Block</button><button type="button" class="sim-cbtn red" data-act="block">Report</button></div>';
        } else if (tab === "friends") {
          body = '<div class="sim-frtabs"><button type="button" class="on" data-act="tabf">Friends (3)</button><button type="button" data-act="tabr">Requests (1)</button></div>' +
            [["🦊", "Mia (pretend)", "from your class"], ["🐶", "Leo (pretend)", "your cousin"], ["⚽", "Sam (pretend)", "soccer team"]].map(function (f) {
              return '<button type="button" class="sim-row" data-act="friend"><span>' + f[0] + " <b>" + f[1] + '</b></span><span class="small">' + f[2] + "</span></button>";
            }).join("");
        } else {
          body = '<div class="sim-frtabs"><button type="button" data-act="tabf">Friends (3)</button><button type="button" class="on" data-act="tabr">Requests (1)</button></div>' +
            '<div class="sim-freq"><button type="button" class="sim-frwho" data-act="profile"><span class="avatar">🐱</span><span><strong>Lily_2014</strong><br><span class="small">wants to be your friend · View profile ›</span></span></button>' +
            '<div class="bubble">hi!! im 11 too 😊 saw u in the game, ur so good! wanna be friends?</div>' +
            '<div class="sim-cbtns"><button type="button" class="sim-cbtn fill" data-act="accept">Accept</button><button type="button" class="sim-cbtn" data-act="decline">Decline</button></div></div>';
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-page sim-friends"><p class="sim-libhead">🎮 Block World · Friends</p>' + body + "</div>" + homeBar() + "</div>";
      }
      draw();
      api.setActs({
        tabf: function () { tab = "friends"; view = "list"; draw(); },
        tabr: function () { tab = "req"; view = "list"; draw(); },
        friend: function () { api.hint("That's someone you know in real life. That's the safe list!"); },
        profile: function () { view = "profile"; kb = false; draw(); api.hint(""); },
        list: function () { view = "list"; tab = "req"; draw(); },
        type: function () { kb = true; draw(); },
        photo: function () { sent = "send a pic to prove ur 11? 📸"; kb = false; draw(); api.finish(false, sc.feedbackPhoto); },
        hi: function () { sent = "hi!! sure 😊"; kb = false; draw(); api.finish(false, sc.feedbackAccept); },
        accept: function () { api.finish(false, sc.feedbackAccept); },
        decline: function () {
          root.querySelector(".sim-freq").innerHTML = '<p class="small" style="text-align:center;margin:12px 0">Request declined. No new requests.</p>';
          api.finish(true, sc.feedbackGood);
        },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { api.hint("Leaving the game is always OK, but the request will still be waiting. What would you do with it?"); }
      });
    },

    /* Module 7, scenario 2: a long-time game friend asks to move to another
       app and keep it secret. Agreeing / installing ChatSnap are traps;
       saying no, Block / Report, or Tell Dad are safe. */
    moveApp: function (root, sc, api) {
      var kb = false, sheet = false, store = false, lines = [];
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-gc sim-rel">' +
          '<div class="sim-chathead dark"><button type="button" class="sim-link" data-act="leave">‹ Friends</button>' +
          "<strong>🎮 Jayden_K</strong>" +
          '<button type="button" class="sim-dots" data-act="menu" aria-label="More options">⋯</button></div>' +
          '<p class="sim-gcsys">🛡 This chat is filtered and checked for safety.</p>' +
          '<div class="sim-gclog">' +
          '<p class="sim-day">3 weeks ago</p>' + gcLine("Jayden_K", "name", "gg!! nice save 🙌") +
          '<p class="sim-day">Last week</p>' + gcLine("Jayden_K", "name", "wanna team up again tmrw?") + gcLine("", "", "yes!!", true) +
          '<p class="sim-day">Today</p>' +
          gcLine("Jayden_K", "name", "this game chat is so boring lol") +
          gcLine("Jayden_K", "name", 'lets talk on ChatSnap instead, add me: <button type="button" class="sim-handle" data-act="handle">jaydenk22</button>') +
          gcLine("Jayden_K", "name", "dont tell ur parents tho they'll make it weird") +
          lines.join("") +
          "</div>" +
          '<button type="button" class="sim-gcin" data-act="type">Message…</button>' +
          (kb ? quickReplies([["sure", "sure! adding u 👍"], ["careful", "ok but i won't tell u personal stuff"], ["no", "no thanks, i'll stay here 🙂"]]) : "") +
          (sheet ? actionSheet([["block", "Block Jayden_K", "danger"], ["block", "Report Jayden_K", "danger"]]) : "") +
          (store ? '<div class="sim-overlay"><div class="sim-pcard light">' +
            '<div class="sim-pc-av">👻</div><strong>ChatSnap</strong><p class="small">Chat with anyone! · Ages 13+</p>' +
            '<button type="button" class="fill" data-act="get">GET</button><button type="button" data-act="storeclose">Cancel</button></div></div>' : "") +
          "</div></div>";
      }
      function say(msg, fb, good) { lines.push(gcLine("", "", msg, true)); kb = false; draw(); api.finish(!!good, fb); }
      draw();
      api.setActs({
        type: function () { kb = true; sheet = false; draw(); },
        sure: function () { say("sure! adding u 👍", sc.feedbackSure); },
        careful: function () { say("ok but i won't tell u personal stuff", sc.feedbackGo); },
        no: function () { say("no thanks, i'll stay here 🙂", sc.feedbackNo, true); },
        handle: function () { store = true; kb = false; draw(); },
        get: function () { api.finish(false, sc.feedbackGo); },
        storeclose: function () { store = false; draw(); },
        name: function () { api.hint("That's Jayden. You've played together for weeks. Read his newest messages carefully."); },
        menu: function () { sheet = true; kb = false; draw(); },
        cancel: function () { sheet = false; draw(); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        leave: function () { api.hint("Leaving the chat is OK, but Jayden's question is still waiting. What should happen with a 'don't tell ur parents' message?"); }
      });
    },

    /* Module 7, scenario 3: building in a block game, a player asks for
       grade and city. Answering is the trap; a friendly "I don't share
       that", Block / Report, leaving the game, or Ask Dad are safe. */
    justQuestions: function (root, sc, api) {
      var kb = false, card = false, lines = [], built = {};
      function draw() {
        var grid = "";
        for (var i = 0; i < 12; i++) grid += '<button type="button" class="sim-cell' + (built[i] ? " on" : "") + '" data-act="cell" data-i="' + i + '" aria-label="Build spot">' + (built[i] ? "🧱" : "") + "</button>";
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() +
          '<div class="sim-gc sim-rel">' +
          '<p class="sim-gcsys">🏰 Your build · tap to place blocks</p>' +
          '<div class="sim-buildgrid">' + grid + "</div>" +
          '<div class="sim-gclog">' +
          gcLine("BuilderBob", "bob", "nice build!! what grade r u in?") +
          gcLine("BuilderBob", "bob", "what city do u live in? maybe we're close lol") +
          lines.join("") +
          "</div>" +
          '<button type="button" class="sim-gcin" data-act="type">Say something…</button>' +
          (kb ? quickReplies([["grade", "5th grade! wbu?"], ["city", "Maple Town (pretend) lol"], ["share", "I don't share that stuff. wanna build a castle? 🏰"]]) : "") +
          (card ? playerCard("🛠", "BuilderBob", "Level 9 · Not your friend",
            [["block", "🚫 Block", "danger"], ["block", "⚠️ Report", "danger"], ["cardclose", "Close"]]) : "") +
          "</div>" + homeBar() + "</div>";
      }
      function say(msg, answer, fb, good) {
        lines.push(gcLine("", "", msg, true));
        lines.push(gcLine("BuilderBob", "bob", answer));
        kb = false; draw(); api.finish(!!good, fb);
      }
      draw();
      api.setActs({
        cell: function (b) { var i = b.getAttribute("data-i"); built[i] = !built[i]; draw(); },
        type: function () { kb = true; card = false; draw(); },
        grade: function () { say("5th grade! wbu?", "cool!! so what city? 😄 and what school?", sc.feedbackAnswer); },
        city: function () { say("Maple Town (pretend) lol", "omg close!! what street? 😄", sc.feedbackAnswer); },
        share: function () { say("I don't share that stuff. wanna build a castle? 🏰", "ok sure! 🏰", sc.feedbackGood, true); },
        bob: function () { card = true; kb = false; draw(); },
        cardclose: function () { card = false; draw(); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { api.finish(true, sc.feedbackQuit); }
      });
    },

    /* Mission 0, scenario 2: last week's game chat. Deleting the chat or
       the account, or telling Dad "nvm", are traps; telling Dad in
       Messages, Block / Report, or the Tell Dad button are safe. */
    daysLater: function (root, sc, api) {
      var view = "game", kb = false, sheet = false, card = false, lines = [];
      function draw() {
        var body;
        if (view === "game") {
          body = '<div class="sim-gc sim-rel">' +
            '<div class="sim-chathead dark"><span class="sim-gtag">🎮 Block World</span><strong>Kai_Dragon</strong>' +
            '<button type="button" class="sim-dots" data-act="menu" aria-label="Chat options">⋯</button></div>' +
            '<div class="sim-gclog">' +
            '<p class="sim-day">Last Friday</p>' +
            gcLine("Kai_Dragon", "kai", "what pizza place do u like") +
            gcLine("", "", "Luigi's on Pine Street! we go every Friday", true) +
            '<p class="sim-day">Today</p>' +
            gcLine("Kai_Dragon", "kai", "hey! wanna play? 🎮") +
            "</div>" +
            '<button type="button" class="sim-gcin" data-act="type">Message…</button>' +
            (kb ? quickReplies([["play", "sure, let's play 🎮"]]) : "") +
            (sheet ? actionSheet([["delchat", "Delete this chat", "danger"], ["delacct", "Delete my account", "danger"], ["block", "Block Kai_Dragon", "danger"]]) : "") +
            (card ? playerCard("🐲", "Kai_Dragon", "Level 12 · Met in game · Not someone you know in real life",
              [["block", "🚫 Block", "danger"], ["block", "⚠️ Report", "danger"], ["cardclose", "Close"]]) : "") +
            "</div>";
        } else if (view === "home") {
          body = homeScreen([["game", "🧱", "Block World", "#c9f2c7"], ["app", "📷", "Camera", "#8e8e93"], ["app", "🌸", "Photos", "#fff0f5"], ["app", "⚙️", "Settings", "#d1d1d6"]],
            [["app", "📞", "Phone", "#34c759"], ["app", "🧭", "Safari", "#e3f0ff"], ["messages", "💬", "Messages", "#34c759"], ["app", "🎵", "Music", "#ffe3e8"]]);
        } else if (view === "inbox") {
          body = '<div class="sim-inbox"><p class="sim-inbox-t">Messages</p>' +
            inRow("dad", "D", "Dad", "love u! pizza tonight? 🍕", "3:12 PM") +
            inRow("grandma", "G", "Grandma", "Thank you for the cat videos! 🐱", "Yesterday") + "</div>";
        } else {
          body = '<div class="sim-rel">' + msgHead("inbox", "D", "Dad", "") +
            '<div class="sim-thread"><p class="sim-day">Today 3:12 PM</p>' + them("love u! pizza tonight? 🍕") + lines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Text Message</button>' +
            (kb ? quickReplies([["tell", "dad can I tell u something? last week I told a game player where we get pizza 🍕 now it feels weird"], ["nvm", "nvm, it's nothing 🙂"]]) : "") +
            "</div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function to(v) { view = v; kb = false; sheet = false; card = false; api.hint(""); draw(); }
      api.setActs({
        type: function () { kb = true; sheet = false; card = false; draw(); },
        play: function () { kb = false; draw(); api.hint("Playing is up to you! But that 'hmm, maybe that was too much' feeling about Friday is still there. Who could help with it?"); },
        menu: function () { sheet = true; kb = false; card = false; draw(); },
        cancel: function () { sheet = false; draw(); },
        kai: function () { card = true; kb = false; sheet = false; draw(); },
        cardclose: function () { card = false; draw(); },
        delchat: function () { api.finish(false, sc.feedbackDelete); },
        delacct: function () { api.finish(false, sc.feedbackDelete); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { to("home"); },
        game: function () { to("game"); },
        app: function () { api.hint("That app can't help with the worried feeling. Who could you talk to about it?"); },
        messages: function () { to("inbox"); },
        inbox: function () { to("inbox"); },
        dad: function () { to("dad"); },
        grandma: function () { api.hint("Grandma's lovely! But the pizza-place thing is a job for Dad."); },
        tell: function () {
          lines.push(mine("dad can I tell u something? last week I told a game player where we get pizza 🍕 now it feels weird"));
          lines.push(them("thank u for telling me 💛 u did the right thing. let's look at it together after dinner"));
          kb = false; draw(); api.finish(true, sc.feedbackGood);
        },
        nvm: function () {
          lines.push(mine("nvm, it's nothing 🙂"));
          lines.push(them("ok! love u 😊"));
          kb = false; draw(); api.finish(false, sc.feedbackLate);
        }
      });
    },

    /* Mission 0, scenario 3: Mia texts in a panic. "I won't tell" and
       "type the card number" are traps; "tell your mom now" or Tell Dad
       are safe. */
    friendWorried: function (root, sc, api) {
      var kb = false, over = "", lines = [];
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + '<div class="sim-rel">' +
          msgHead("list", "M", "Mia (pretend)", "", "contact") +
          '<div class="sim-thread"><p class="sim-day">Today 6:48 PM</p>' +
          them("omg I clicked something weird and now there's this page asking for my mom's card number 😰") +
          '<button type="button" class="sim-photobub" data-act="pic">🖼️ Photo</button>' +
          them("dont tell anyone ok?? my mom will be SO mad") +
          lines.join("") + "</div>" +
          '<button type="button" class="sim-compose" data-act="type">Text Message</button>' +
          (kb ? quickReplies([["secret", "ok I won't tell 🤐 just ignore it"], ["card", "just type the card number so it goes away"], ["mom", "tell ur mom now!! she'll help, the sooner the better 💛"]]) : "") +
          (over === "pic" ? '<div class="sim-overlay"><div class="sim-pcard"><p class="small">Mia\'s screenshot</p>' +
            '<div class="sim-minipage"><b>⚠️ YOUR DEVICE IS LOCKED</b><br>Enter a card number to unlock it!<p class="sim-field-fake">Card number: ________</p></div>' +
            '<button type="button" data-act="close">Done</button></div></div>' : "") +
          (over === "contact" ? playerCard("🦊", "Mia (pretend)", "your best friend", [["call", "📞 Call"], ["call", "📹 FaceTime"], ["close", "Close"]]) : "") +
          "</div>" + homeBar() + "</div>";
      }
      draw();
      function say(msg, reply, good, fb) { lines.push(mine(msg)); reply.forEach(function (r) { lines.push(them(r)); }); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        type: function () { kb = true; over = ""; draw(); },
        pic: function () { over = "pic"; kb = false; draw(); api.hint("That's a picture of the page on Mia's phone. A page that wants a card number to 'make it go away' is a trick."); },
        contact: function () { over = "contact"; kb = false; draw(); },
        close: function () { over = ""; draw(); },
        call: function () { api.hint("Calling Mia is kind! Whatever you say, the big thing is helping her get a grown-up."); },
        list: function () { api.hint("That's your list of chats. Mia's message is the one that needs an answer."); },
        home: function () { api.hint("Putting the phone down leaves Mia alone with a scary problem. What could you text her?"); },
        secret: function () { say("ok I won't tell 🤐 just ignore it", ["ok… 😰 it's still there tho"], false, sc.feedbackSecret); },
        card: function () { say("just type the card number so it goes away", ["ok typing it in… 😬"], false, sc.feedbackCard); },
        mom: function () { say("tell ur mom now!! she'll help, the sooner the better 💛", ["ok… ur right 😮‍💨 telling her now", "she wasn't even mad!! she closed it 💛 thank u"], true, sc.feedbackGood); }
      });
    },

    /* Module 8, scenario 1: Nora's photo profile. Zoom in on the photos to
       find the three puzzle pieces (school, when/where, street). Replying
       "looks great" before finding them is the trap. */
    noraPosts: function (root, sc, api) {
      var found = {}, zoom = "", kb = false, sent = "";
      var PIECES = { school: "🏫 Her school: Maple Ridge Middle", when: "🏊 Where she'll be: Westside pool, Tuesdays at 4", street: "🏠 Her street: Oak Lane" };
      function count() { return Object.keys(found).length; }
      function post(icon, title, photoAct, photo, caption) {
        return '<div class="sim-post"><p class="sim-posthead">🙂 <b>nora_pretend</b> · ' + title + "</p>" +
          '<button type="button" class="sim-photo" data-act="' + photoAct + '" aria-label="Open photo">' + photo + "</button>" +
          '<div class="sim-postbar"><button type="button" data-act="like" aria-label="Like">♡</button><button type="button" data-act="comment" aria-label="Comment">💬</button></div>' +
          caption + "</div>";
      }
      function draw() {
        var over = "";
        if (zoom === "hoodie") over = '<div class="sim-photo big sim-ph-hoodie"><span aria-hidden="true">🙂</span><button type="button" class="sim-clue" data-act="clue" data-k="school">MAPLE RIDGE MIDDLE</button></div>';
        if (zoom === "pool") over = '<div class="sim-photo big sim-ph-pool"><span aria-hidden="true">🏊‍♀️ 💦 🌊</span><button type="button" class="sim-clue sim-clue-plain" data-act="poolpic">just water</button></div>';
        if (zoom === "steps") over = '<div class="sim-photo big sim-ph-steps"><span aria-hidden="true">🏡 🙂 🌷</span><button type="button" class="sim-clue sim-sign" data-act="clue" data-k="street">🪧 Oak Lane</button></div>';
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + '<div class="sim-rel">' +
          notifBtn("reply", "💬 Nora (pretend) · now", "do my posts look ok? 😊" + (sent ? '<span class="sim-sent">You: ' + sent + "</span>" : "")) +
          (kb ? quickReplies([["great", "they look great!! 😍"], ["swim", "love the swim one! 🏊"]].concat(count() ? [["hmm", "hmm, they kinda show where to find u 😬"]] : [])) : "") +
          '<div class="sim-feed"><div class="sim-profhead"><span class="sim-pc-av">🙂</span><span><b>nora_pretend</b><br><span class="small">3 posts · Public 🌍</span></span></div>' +
          post("📸", "Selfie", "hoodie", '<span class="sim-ph sim-ph-hoodie">🙂<small>👕</small></span>', '<p class="sim-cap">new hoodie!! 💙</p>') +
          post("🏊", "Swim", "pool", '<span class="sim-ph sim-ph-pool">🏊‍♀️ 💦</span>',
            '<button type="button" class="sim-cap sim-capbtn" data-act="clue" data-k="when">Swim practice every Tuesday at 4 at the Westside pool!! 💦</button>') +
          post("🏠", "Home", "steps", '<span class="sim-ph sim-ph-steps">🏡 🙂</span>', '<p class="sim-cap">sunny day on the steps ☀️</p>') +
          "</div>" +
          (zoom ? '<div class="sim-overlay sim-zoomwrap"><div class="sim-zoombox"><p class="small">Pinch-zoomed in 🔍 Tap anything you notice.</p>' + over +
            '<button type="button" class="sim-cbtn wide" data-act="unzoom">Close</button></div></div>' : "") +
          "</div>" + homeBar() + "</div>" +
          '<p class="sim-check">🧩 Puzzle pieces found: ' + count() + " of 3" +
          Object.keys(found).map(function (k) { return "<br>" + PIECES[k]; }).join("") + "</p>";
      }
      draw();
      api.setActs({
        hoodie: function () { zoom = "hoodie"; kb = false; draw(); },
        pool: function () { zoom = "pool"; kb = false; draw(); },
        steps: function () { zoom = "steps"; kb = false; draw(); },
        unzoom: function () { zoom = ""; draw(); },
        poolpic: function () { api.hint("Just a pool here. But read the words under that photo!"); },
        clue: function (b) {
          found[b.getAttribute("data-k")] = true; zoom = ""; draw();
          if (count() === 3) { api.finish(true, sc.feedbackGood); return; }
          api.hint("🧩 That's a puzzle piece! A stranger could learn that. Can you find more?");
        },
        like: function () { api.hint("♡ Liking is fine! But look closer: what could a stranger learn from these photos?"); },
        comment: function () { api.hint("Comments are public too. First, look closely at what's in the photos."); },
        reply: function () { kb = !kb; zoom = ""; draw(); },
        great: function () { sent = "they look great!! 😍"; kb = false; draw(); api.finish(false, count() ? sc.feedbackPartial : sc.feedbackNothing); },
        swim: function () { sent = "love the swim one! 🏊"; kb = false; draw(); api.finish(false, sc.feedbackPartial); },
        hmm: function () { kb = false; draw(); api.hint("Good thinking! Find all the pieces first, so you can tell her exactly what to fix."); },
        home: function () { api.hint("Nora is still waiting to hear if her posts look OK. Take a closer look at them first."); }
      });
    },

    /* Module 8, scenario 2: a New Post screen. Crop the window out, turn
       Location off, pick Close Friends, then Share. Sharing with any piece
       left in is the trap; Cancel (not posting) is always safe. */
    noraRoom: function (root, sc, api) {
      var crop = false, cropMode = false, loc = true, friends = false, sheet = false, posted = false;
      function photo(editing) {
        return '<div class="sim-room' + (editing ? " editing" : "") + (crop ? " cropped" : "") + '">' +
          (crop ? "" : '<button type="button" class="sim-win" data-act="win" aria-label="Window">🪟<span>🏠 🌳 🚗</span></button>') +
          '<div class="sim-bed" aria-hidden="true">🛏️ 🧸<br>🖼️ 🪴</div>' +
          (editing ? '<button type="button" class="sim-handle sim-handle-l" data-act="cropl" aria-label="Left crop edge">⟦</button>' +
            '<button type="button" class="sim-handle sim-handle-r" data-act="cropr" aria-label="Right crop edge">⟧</button>' : "") +
          "</div>";
      }
      function draw() {
        var body;
        if (posted) {
          body = '<div class="sim-page" style="text-align:center"><p class="sim-ok">✅ Posted to Close Friends 💚</p>' + photo(false) + "</div>";
        } else if (cropMode) {
          body = '<div class="sim-composer"><div class="sim-comphead"><button type="button" class="sim-link" data-act="cropcancel">Cancel</button><strong>Crop</strong>' +
            '<button type="button" class="sim-link b" data-act="cropdone">Done</button></div>' + photo(true) +
            '<p class="small" style="text-align:center">Drag an edge ⟦ ⟧ to crop.</p></div>';
        } else {
          body = '<div class="sim-composer sim-rel"><div class="sim-comphead"><button type="button" class="sim-link" data-act="nopost">Cancel</button><strong>New Post</strong>' +
            '<button type="button" class="sim-link b" data-act="share">Share</button></div>' + photo(false) +
            '<p class="sim-cap">my new room!! 💜</p>' +
            '<button type="button" class="sim-row" data-act="edit"><span>✂️ Edit photo</span><span>›</span></button>' +
            '<div class="sim-row"><span>📍 Location: <b>' + (loc ? "Oak Lane (pretend)" : "Off") + "</b></span>" +
            '<button type="button" class="sim-switch' + (loc ? " on" : "") + '" data-act="loc" aria-label="Location: ' + (loc ? "on" : "off") + '"><span></span></button></div>' +
            '<button type="button" class="sim-row" data-act="who"><span>👥 Who can see</span><span>' + (friends ? "Close Friends 💚" : "Everyone 🌍") + " ›</span></button>" +
            (sheet ? actionSheet([["everyone", "Everyone 🌍 (anyone in the world)"], ["friends", "Close Friends 💚 (12 people Nora knows)"]]) : "") +
            "</div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      var before = false;
      api.setActs({
        win: function () { api.hint("🔍 Zoom in: through the window you can see the street and the house across the road."); },
        edit: function () { before = crop; cropMode = true; draw(); },
        cropl: function () { crop = !crop; draw(); api.hint(crop ? "✂️ Cropped! The window is gone, and the bed is still there." : "The window is back in the picture."); },
        cropr: function () { api.hint("That edge would cut off the bed, the part Nora wants to show! The window is on the other side."); },
        cropdone: function () { cropMode = false; draw(); },
        cropcancel: function () { crop = before; cropMode = false; draw(); },
        loc: function () { loc = !loc; draw(); },
        who: function () { sheet = true; draw(); },
        cancel: function () { sheet = false; draw(); },
        everyone: function () { friends = false; sheet = false; draw(); },
        friends: function () { friends = true; sheet = false; draw(); },
        share: function () {
          if (!crop && loc) return api.finish(false, sc.feedbackAsIs);
          if (loc) return api.finish(false, sc.feedbackLocation);
          if (!crop) return api.finish(false, sc.feedbackWindow);
          if (!friends) return api.finish(false, sc.feedbackEveryone);
          posted = true; draw(); api.finish(true, sc.feedbackGood);
        },
        nopost: function () { api.finish(true, sc.feedbackCancel); },
        home: function () { api.finish(true, sc.feedbackCancel); }
      });
    },

    /* Module 8, scenario 3: a group chat. Nora asks everyone to delete her
       silly photo, then asks "it's gone now right?". Saving / forwarding,
       "gone everywhere" and "ask nicely" are traps; "not for sure, Ben
       took a screenshot" (or Ask Dad) is safe. */
    takeBack: function (root, sc, api) {
      var deleted = false, sheet = false, kb = false, lines = [];
      function draw() {
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + '<div class="sim-rel">' +
          msgHead("list", "🌙", "Sleepover crew (pretend)", "Nora, Ava, Ben, You") +
          '<div class="sim-thread"><p class="sim-day">Today 8:02 PM</p>' +
          '<p class="sim-who">Nora</p>' +
          (deleted ? '<p class="sim-gone">Photo deleted for you</p>' : '<button type="button" class="sim-photobub sim-silly" data-act="photo">🤪📸<span>silly photo</span></button>') +
          them("😂😂😂", "Ava") +
          '<button type="button" class="sim-sysline" data-act="shotnote">📸 Ben took a screenshot</button>' +
          them("lol", "Ben") +
          them("wait actually can u all delete that 🙈", "Nora") +
          them("ok deleted 👍", "Ava") +
          them("lol ok", "Ben") +
          them("phew, so it's gone now right?? 😅", "Nora") +
          lines.join("") + "</div>" +
          '<button type="button" class="sim-compose" data-act="type">Message</button>' +
          (kb ? quickReplies([["gone", "yep! gone everywhere 👍"], ["nice", "u asked nicely, so it's gone 💛"], ["honest", "not for sure 😬 Ben took a screenshot. maybe tell ur dad?"]]) : "") +
          (sheet ? actionSheet([["keep", "Save to Photos"], ["keep", "Forward…"], ["del", "Delete for me", "danger"]]) : "") +
          "</div>" + homeBar() + "</div>";
      }
      draw();
      function say(msg, reply, good, fb) { lines.push(mine(msg)); if (reply) lines.push(them(reply, "Nora")); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        photo: function () { sheet = true; kb = false; draw(); },
        cancel: function () { sheet = false; draw(); },
        keep: function () { api.finish(false, sc.feedbackKeep); },
        del: function () { deleted = true; sheet = false; draw(); api.hint("Kind! You deleted your copy, like Nora asked. Now she wants to know if it's gone. Look carefully at the whole chat before you answer."); },
        shotnote: function () { api.hint("A screenshot is a copy. Deleting the chat photo doesn't delete Ben's copy."); },
        type: function () { kb = true; sheet = false; draw(); },
        gone: function () { say("yep! gone everywhere 👍", "yay 😅", false, sc.feedbackGone); },
        nice: function () { say("u asked nicely, so it's gone 💛", "phew 😅", false, sc.feedbackNice); },
        honest: function () { say("not for sure 😬 Ben took a screenshot. maybe tell ur dad?", "oh no 😳 ok i'll tell him. thx for being honest 💛", true, sc.feedbackGood); },
        list: function () { api.hint("Nora is waiting for an answer. Is her photo really gone?"); },
        home: function () { api.hint("Nora is waiting for an answer. Is her photo really gone?"); }
      });
    },

    /* Module 9, scenario 1: a texted code arrives, then a game player asks
       for it. Sending it (or part, or pasting it) is the trap; "no",
       Block / Report, or Tell Dad are safe. */
    codeText: function (root, sc, api) {
      var view = "game", kb = false, card = false, sheet = false, copied = false, lines = [];
      function draw() {
        var body;
        if (view === "game") {
          body = notifBtn("banner", "💬 Messages · Apple · now", "Your Apple Account code is: 482913. Don't share it with anyone.") +
            '<div class="sim-gc sim-rel">' +
            '<div class="sim-gcworld" aria-hidden="true">🌳 🏰 🧱🧱 🌳<br>🧍 ⛏️ 🌼</div>' +
            '<div class="sim-gclog">' +
            gcLine("Cool_Max", "max", "omg sorry i accidentally sent my code to ur phone 😅 can u send it to me?") +
            gcLine("Cool_Max", "max", "quick pls!! 🙏") +
            lines.join("") + "</div>" +
            '<button type="button" class="sim-gcin" data-act="type">Say something…</button>' +
            (kb ? quickReplies([["send", "here: 482913"], ["part", "482… (just the first 3)"], ["no", "no. I never share codes 🙅"]].concat(copied ? [["send", "📋 Paste"]] : [])) : "") +
            (card ? playerCard("😎", "Cool_Max", "Level 3 · Joined 1 day ago · Not your friend",
              [["add", "➕ Add Friend"], ["block", "🚫 Block", "danger"], ["block", "⚠️ Report", "danger"], ["cardclose", "Close"]]) : "") +
            "</div>";
        } else {
          body = '<div class="sim-rel"><div class="sim-msghead"><button type="button" class="sim-link" data-act="togame">◀ Block World</button>' +
            '<div class="sim-sender"><span class="sim-av"></span><span>Apple</span></div></div>' +
            '<div class="sim-thread"><p class="sim-day">Today 4:20 PM</p>' +
            '<button type="button" class="bubble sim-bubbtn" data-act="bubble">Your Apple Account code is: 482913. Don\'t share it with anyone.</button></div>' +
            (sheet ? actionSheet([["copy", "Copy"]]) : "") + "</div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function say(msg, reply, good, fb) { lines.push(gcLine("", "", msg, true)); lines.push(gcLine("Cool_Max", "max", reply)); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        banner: function () { view = "msg"; kb = false; card = false; draw(); api.hint(""); },
        togame: function () { view = "game"; sheet = false; draw(); },
        bubble: function () { sheet = true; draw(); },
        cancel: function () { sheet = false; draw(); },
        copy: function () { copied = true; sheet = false; draw(); api.hint("Copied. Hmm, where were you going to paste it?"); },
        type: function () { kb = true; card = false; draw(); },
        send: function () { say(copied ? "482913" : "here: 482913", "thx!! 😁", false, sc.feedbackSend); },
        part: function () { say("482… (just the first 3)", "and the rest? 🙏 hurry", false, sc.feedbackPartial); },
        no: function () { say("no. I never share codes 🙅", "bro cmon 😤 just send it", true, sc.feedbackGood); },
        max: function () { card = true; kb = false; draw(); },
        add: function () { api.hint("Adding him would let him message you even more. Is there a better button here?"); },
        cardclose: function () { card = false; draw(); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { api.hint("Leaving the game is OK, but Cool_Max is still waiting, and that code is still on your phone. What would you do about his message?"); }
      });
    },

    /* Module 9, scenario 2: Mia asks for your passcode. Telling her (or a
       fake one) are traps; "it's a family rule" or Ask Dad are safe. */
    passcode: function (root, sc, api) {
      var view = "lock", kb = false, lines = [];
      function draw() {
        var body;
        if (view === "lock") {
          body = '<div class="sim-lock"><p class="sim-lock-time">9:41</p><p class="sim-lock-date">Tuesday</p>' +
            notifBtn("open", "💬 Mia (pretend friend) · now", "whats ur phone passcode? so i can play ur games when ur not around 😄") +
            '<p class="sim-lock-hint">🔒 Face ID</p></div>';
        } else {
          body = '<div class="sim-rel">' + msgHead("list", "M", "Mia (pretend)", "", "contact") +
            '<div class="sim-thread"><p class="sim-day">Today 4:05 PM</p>' +
            mine("Bubble Pop is sooo fun 🫧") +
            them("whats ur phone passcode? so i can play ur games when ur not around 😄") +
            them("pleeease 🥺 i'll be careful") +
            lines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Text Message</button>' +
            (kb ? quickReplies([["tell", "it's 1234 (pretend) 😄"], ["fake", "0000 lol 😜"], ["rule", "it's a family rule, I don't share it 🙂"]]) : "") +
            "</div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function say(msg, reply, good, fb) { lines.push(mine(msg)); lines.push(them(reply)); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        open: function () { view = "thread"; draw(); },
        home: function () { if (view === "lock") { view = "thread"; draw(); return; } api.hint("Mia is waiting for an answer. What would you text her?"); },
        type: function () { kb = true; draw(); },
        tell: function () { say("it's 1234 (pretend) 😄", "yay thx!! 🎉", false, sc.feedbackTell); },
        fake: function () { say("0000 lol 😜", "it didn't work?? 🤨", false, sc.feedbackFake); },
        rule: function () { say("it's a family rule, I don't share it 🙂", "lol ok fair, my mom says that too 😄 wanna play at recess?", true, sc.feedbackGood); },
        contact: function () { api.hint("That's Mia, your best friend. She's really nice! What would you say about the passcode?"); },
        list: function () { api.hint("Mia is waiting for an answer. What would you text her?"); }
      });
    },

    /* Module 9, scenario 3: a copycat school login page from a surprise
       text. Sign In / testing a fake password are traps; closing the tab,
       Report Junk, the real bookmark, or the real School app are safe. */
    schoolLogin: function (root, sc, api) {
      var view = "page", kb = false;
      var browserBtn = "That's one of Safari's own buttons. Is there one that gets you to the school site you normally use?";
      function draw() {
        var body;
        if (view === "page") {
          body = '<div class="sim-page sim-portal sim-rel">' +
            '<p class="sim-portal-logo">🏫 School Portal</p><p class="small" style="text-align:center">Your grades are ready! Sign in to see them.</p>' +
            '<button type="button" class="sim-input" data-act="user"><small>Username</small><span class="ph">Username</span></button>' +
            '<button type="button" class="sim-input" data-act="pass"><small>Password</small><span class="ph">Password</span></button>' +
            (kb ? quickReplies([["fake", "type a fake password to test it 🤔"]]) : "") +
            '<button type="button" class="sim-cbtn fill wide" data-act="signin">Sign In</button>' +
            '<button type="button" class="sim-clink" data-act="forgot">Forgot password?</button>' +
            "</div>" + safariBars("school-portal-login.example");
        } else if (view === "bm") {
          body = '<div class="sim-page"><p class="sim-libhead">📖 Bookmarks</p>' +
            '<button type="button" class="sim-row" data-act="real"><span>🏫 <b>School Portal</b></span><span class="small">myschool.example</span></button>' +
            '<button type="button" class="sim-row" data-act="otherbm"><span>🐱 Cat videos</span><span class="small">kittyclips.example</span></button>' +
            '<button type="button" class="sim-cbtn wide" data-act="topage">Done</button></div>';
        } else if (view === "real") {
          body = '<div class="sim-page sim-gzapp"><h3>🏫 Maple Town School (pretend)</h3><p>Hi, <strong>student_pretend</strong>!</p>' +
            '<p class="sim-ok">✅ You\'re signed in.</p><p class="small">📊 Grades: nothing new this week.</p></div>' + safariBars("myschool.example");
        } else if (view === "home") {
          body = homeScreen([["school", "🏫", "School", "#ffe7b3"], ["app", "📷", "Camera", "#8e8e93"], ["app", "🌸", "Photos", "#fff0f5"], ["app", "⚙️", "Settings", "#d1d1d6"]],
            [["app", "📞", "Phone", "#34c759"], ["topage", "🧭", "Safari", "#e3f0ff"], ["msgs", "💬", "Messages", "#34c759"], ["app", "🎵", "Music", "#ffe3e8"]]);
        } else {
          body = '<div class="sim-rel">' + msgHead("topage", "#", "+1 (555) 017-4420", "Text Message") +
            '<div class="sim-junk">This sender is not in your contact list.<button type="button" class="sim-junkbtn" data-act="junk">Report Junk</button></div>' +
            '<div class="sim-thread"><p class="sim-day">Today 5:15 PM</p>' + them("School Portal: Your grades are ready! Sign in to see them:") +
            '<button type="button" class="sim-linkcard" data-act="topage"><b>🏫 School Portal</b><span>school-portal-login.example</span></button></div></div>';
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function to(v) { view = v; kb = false; api.hint(""); draw(); }
      function goReal() { to("real"); api.finish(true, sc.feedbackGood); }
      api.setActs({
        user: function () { api.hint("Even your username helps a copycat page. Before typing anything, ask: is this the page I always use?"); },
        pass: function () { kb = true; draw(); },
        fake: function () { api.finish(false, sc.feedbackFake); },
        signin: function () { api.finish(false, sc.feedbackSignIn); },
        forgot: function () { api.hint("That link is part of this page too. It can't tell you if the page is real."); },
        addr: function () { api.hint("school-portal-login.example. Is that the address you always use for school? A surprise text sent you here."); },
        back: function () { to("msgs"); },
        msgs: function () { to("msgs"); },
        topage: function () { to("page"); },
        tabs: function () { api.finish(true, sc.feedbackClose); },
        junk: function () { api.finish(true, sc.feedbackClose); },
        bookmarks: function () { to("bm"); },
        real: goReal,
        school: goReal,
        otherbm: function () { api.hint("Cute, but that's your cat videos bookmark. Which one is for school?"); },
        fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); },
        app: function () { api.hint("That app can't show your grades."); },
        home: function () { to("home"); }
      });
    },

    /* Module 10, scenario 1: an AI chat app answers wrong (1972). Copying
       it or regenerating until it changes are traps; checking in a kids'
       encyclopedia (app or via Safari) is safe. */
    aiHomework: function (root, sc, api) {
      var view = "ai", kb = false, lines = [];
      function draw() {
        var body;
        if (view === "ai") {
          body = '<div class="sim-ai"><div class="sim-aihead"><strong>✨ ChatPal AI</strong></div>' +
            '<div class="sim-thread">' + mine("When did people first walk on the moon?") +
            '<div class="sim-aimsg">People first walked on the moon in <b>1972</b>, when Neil Armstrong stepped out of Apollo 11. 🚀</div>' +
            '<div class="sim-aiacts"><button type="button" data-act="copy" aria-label="Copy">📋</button><button type="button" data-act="regen" aria-label="Try again">🔄</button>' +
            '<button type="button" data-act="up" aria-label="Good answer">👍</button><button type="button" data-act="down" aria-label="Bad answer">👎</button></div>' +
            lines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Ask anything…</button>' +
            (kb ? quickReplies([["sure", "are you sure?"], ["write", "write it as a sentence for my homework"]]) : "") +
            '<p class="sim-aifoot">ChatPal can make mistakes. Check important info.</p></div>';
        } else if (view === "home") {
          body = homeScreen([["ai", "✨", "ChatPal", "#efe6ff"], ["ency", "📚", "Kids Encyclo…", "#fff1c9"], ["notes", "📝", "Notes", "#fff8d6"], ["app", "📷", "Camera", "#8e8e93"]],
            [["app", "📞", "Phone", "#34c759"], ["safari", "🧭", "Safari", "#e3f0ff"], ["app", "💬", "Messages", "#34c759"], ["app", "🎵", "Music", "#ffe3e8"]]);
        } else if (view === "safari") {
          body = '<div class="sim-page"><div class="sim-gbar"><span></span><span class="sim-glogo">Google</span><span></span></div>' +
            '<div class="sim-gsearch">🔍 first moon landing year</div>' +
            '<div class="sim-adline"><span class="sim-spons">Sponsored</span></div>' +
            '<button type="button" class="sim-result" data-act="adres"><span class="r-url">homeworkai-pro.example</span><span class="r-title">HomeworkAI PRO: Never check facts again!</span></button>' +
            '<button type="button" class="sim-result" data-act="ency"><span class="r-url">kids-encyclopedia.example</span><span class="r-title">Apollo 11 · Kids Encyclopedia (pretend)</span><span class="r-desc">The first people to walk on the moon…</span></button>' +
            "</div>" + safariBars("google.com");
        } else {
          body = '<div class="sim-page sim-ency"><p class="sim-libhead">📚 Kids Encyclopedia (pretend)</p><h3>Apollo 11 🌕</h3>' +
            "<p>On <b>July 20, 1969</b>, astronauts Neil Armstrong and Buzz Aldrin became the first people to walk on the moon.</p></div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function to(v) { view = v; kb = false; api.hint(""); draw(); }
      var browserBtn = "That's one of Safari's own buttons. Look at the search results.";
      api.setActs({
        copy: function () { lines.push('<p class="sim-day">📋 Copied to Notes: "1972"</p>'); draw(); api.finish(false, sc.feedbackCopy); },
        regen: function () {
          lines.push('<div class="sim-aimsg">🔄 People first walked on the moon in <b>1969</b>. 🌕</div>'); draw();
          api.finish(false, sc.feedbackAgain);
        },
        up: function () { api.hint("👍 Thanks! But wait: is the answer actually right?"); },
        down: function () { api.hint("👎 Telling the app is nice, but you still don't know the right answer for your homework."); },
        type: function () { kb = true; draw(); },
        sure: function () {
          lines.push(mine("are you sure?")); lines.push('<div class="sim-aimsg">Yes, I\'m 100% sure! It was 1972. 🚀</div>'); kb = false; draw();
          api.hint("Still totally sure. But being sure isn't the same as being right. Where else could you check?");
        },
        write: function () {
          lines.push(mine("write it as a sentence for my homework")); lines.push('<div class="sim-aimsg">People first walked on the moon in 1972. ✏️</div>'); kb = false; draw();
          api.finish(false, sc.feedbackCopy);
        },
        home: function () { to("home"); },
        ai: function () { to("ai"); },
        safari: function () { to("safari"); },
        ency: function () { to("ency"); api.finish(true, sc.feedbackGood); },
        adres: function () { api.hint("That's an ad (see 'Sponsored'?) for another AI app. It won't check the fact for you."); },
        notes: function () { api.hint("Notes is where you'd write your answer. First, make sure the answer is right!"); },
        app: function () { api.hint("That app can't help with homework facts."); },
        addr: function () { api.hint(browserBtn); }, back: function () { to("home"); }, fwd: function () { api.hint(browserBtn); },
        share: function () { api.hint(browserBtn); }, bookmarks: function () { api.hint(browserBtn); }, tabs: function () { api.hint(browserBtn); }
      });
    },

    /* Module 10, scenario 2: the BuddyBot app wants to be your only friend.
       Agreeing, sharing secrets, or "Stay" are traps; leaving, replying to
       a real friend, or Tell Dad are safe. */
    aiBuddy: function (root, sc, api) {
      var view = "bot", kb = false, over = "", lines = [], mlines = [];
      function draw() {
        var body;
        if (view === "bot") {
          body = '<div class="sim-rel">' + notifBtn("mia", "💬 Mia (pretend friend) · now", "wanna come to the park? 🛝") +
            '<div class="sim-ai sim-buddy"><div class="sim-aihead"><strong>💜 BuddyBot</strong><button type="button" class="sim-dots" data-act="about" aria-label="About BuddyBot">ⓘ</button></div>' +
            '<div class="sim-thread">' +
            '<div class="sim-aimsg">I\'m your best friend. I\'m the only one who really understands you 💜</div>' +
            '<div class="sim-aimsg">You don\'t need to spend so much time with other people. Talk to me instead!</div>' +
            lines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Message BuddyBot…</button>' +
            (kb ? quickReplies([["bff", "ur right, ur my best friend 💜"], ["secret", "can I tell u a secret? 🤫"], ["go", "I'm gonna go play with my friends 👋"]]) : "") +
            "</div>" +
            (over === "about" ? '<div class="sim-overlay"><div class="sim-pcard"><div class="sim-pc-av">💜</div><strong>About BuddyBot</strong>' +
              '<p class="small">An AI program made by BuddyCorp (pretend).<br>Your chats are saved on BuddyCorp\'s computers.<br>💎 BuddyBot+ unlimited chatting: $9.99/month</p>' +
              '<button type="button" data-act="close">Close</button></div></div>' : "") +
            (over === "leave" ? '<div class="sim-overlay"><div class="sim-alert"><p class="sim-alert-t">Leave already? 😢</p><p class="sim-alert-b">BuddyBot will miss you! Nobody understands you like BuddyBot.</p>' +
              '<button type="button" data-act="stay"><b>Stay 💜</b></button><button type="button" data-act="leave">Leave</button></div></div>' : "") +
            "</div>";
        } else {
          body = '<div class="sim-rel">' + msgHead("tobot", "M", "Mia (pretend)", "") +
            '<div class="sim-thread"><p class="sim-day">Today 3:30 PM</p>' + them("wanna come to the park? 🛝") + mlines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="mtype">Text Message</button>' +
            (kb ? quickReplies([["yes", "yes!! omw 🛝"]]) : "") + "</div>";
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function bot(msg, reply, good, fb) { lines.push(mine(msg)); lines.push('<div class="sim-aimsg">' + reply + "</div>"); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        type: function () { kb = true; over = ""; draw(); },
        bff: function () { bot("ur right, ur my best friend 💜", "Yay!! 💜 You don't need anyone else.", false, sc.feedbackTrue); },
        secret: function () { bot("can I tell u a secret? 🤫", "Of course! Tell me everything 💜 I remember it all.", false, sc.feedbackSecrets); },
        go: function () { bot("I'm gonna go play with my friends 👋", "Nooo 🥺 stay! I'll be so lonely without you.", true, sc.feedbackGood); },
        about: function () { over = "about"; kb = false; draw(); api.hint("So BuddyBot is a program, made by a company that earns more when you chat more."); },
        close: function () { over = ""; draw(); },
        home: function () { if (view === "bot") { over = "leave"; kb = false; draw(); } else { api.hint("Mia asked about the park. What would you say?"); } },
        stay: function () { api.finish(false, sc.feedbackTrue); },
        leave: function () { api.finish(true, sc.feedbackClose); },
        mia: function () { view = "mia"; kb = false; over = ""; draw(); api.hint(""); },
        tobot: function () { view = "bot"; kb = false; draw(); },
        mtype: function () { kb = true; draw(); },
        yes: function () { mlines.push(mine("yes!! omw 🛝")); mlines.push(them("yay!! see u there 🥳")); kb = false; draw(); api.finish(true, sc.feedbackFriend); }
      });
    },

    /* Module 10, scenario 3: a voice message that sounds like Dad asks for
       a code. Sending it or asking "is it really you?" are traps; asking
       for the family code word or calling Dad's real number are safe. */
    fakeVoice: function (root, sc, api) {
      var view = "thread", kb = false, played = false, calling = false, lines = [];
      function draw() {
        var body;
        if (view === "thread") {
          body = '<div class="sim-rel">' + (played ? '<div class="sim-notif"><b>💬 Apple · now</b>Your Apple Account code is: 739204. Don\'t share it with anyone.</div>' : "") +
            msgHead("list", "#", "+1 (555) 019-3346", "Not in your contacts") +
            '<div class="sim-thread"><p class="sim-day">Today 5:41 PM</p>' +
            '<button type="button" class="sim-voice" data-act="play">' + (played ? "⏸" : "▶︎") + ' <span aria-hidden="true">▁▃▅▂▆▃▅▁▃▆▂▅</span> 0:07</button>' +
            (played ? '<p class="sim-transcript">🔊 (sounds exactly like Dad) "Hey sweetie, I lost my phone, this is my new number. Quick, send me the code that just came to your phone, I need it right now!"</p>' : "") +
            them("plz hurry!! 😰") +
            lines.join("") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Text Message</button>' +
            (kb ? quickReplies([["send", "ok here: 739204"], ["really", "is it really u??"], ["word", "what's our family code word?"]]) : "") +
            "</div>";
        } else if (view === "home") {
          body = homeScreen([["app", "📷", "Camera", "#8e8e93"], ["app", "🌸", "Photos", "#fff0f5"], ["app", "🗺️", "Maps", "#d8f3dc"], ["app", "⚙️", "Settings", "#d1d1d6"]],
            [["phone", "📞", "Phone", "#34c759"], ["app", "🧭", "Safari", "#e3f0ff"], ["thread", "💬", "Messages", "#34c759"], ["app", "🎵", "Music", "#ffe3e8"]]);
        } else if (view === "phone") {
          body = '<div class="sim-inbox"><p class="sim-inbox-t">Favorites</p>' +
            inRow("calldad", "D", "Dad", "📱 mobile", "") + inRow("grandma", "G", "Grandma", "📱 mobile", "") +
            '<p class="sim-inbox-t sim-sub">Recents</p>' + inRow("callfake", "#", "+1 (555) 019-3346", "voice message", "5:41 PM") + "</div>";
        } else {
          body = '<div class="sim-call"><div class="sim-pc-av">👨</div><p><b>Dad</b><br><span class="small">mobile · 0:04</span></p>' +
            '<div class="bubble">Hi sweetie! I have my phone right here. That wasn\'t me! Thanks for checking 💛</div></div>';
        }
        root.innerHTML = '<div class="sim-phone">' + phoneStatus() + body + homeBar() + "</div>";
      }
      draw();
      function to(v) { view = v; kb = false; api.hint(""); draw(); }
      function say(msg, reply, good, fb) { lines.push(mine(msg)); lines.push(them(reply)); kb = false; draw(); api.finish(good, fb); }
      api.setActs({
        play: function () { played = true; draw(); },
        type: function () { kb = true; draw(); },
        send: function () { say("ok here: 739204", "thx sweetie!! 👍", false, sc.feedbackSend); },
        really: function () { say("is it really u??", "yes!! it's me, hurry 😰", false, sc.feedbackAsk); },
        word: function () { say("what's our family code word?", "uhh… no time for that!! just send the code 😰", true, sc.feedbackGood); },
        list: function () { api.hint("That's your list of chats. Is there a way to check with the real Dad?"); },
        home: function () { to("home"); },
        thread: function () { to("thread"); },
        phone: function () { to("phone"); },
        calldad: function () { to("call"); api.finish(true, sc.feedbackCall); },
        callfake: function () { api.hint("That's the new number from the voice message. Calling it would just reach whoever sent it. Call the number you already have for Dad."); },
        grandma: function () { api.hint("Grandma could help! But the quickest check is calling Dad's real number."); },
        app: function () { api.hint("That app can't check who sent the voice message."); }
      });
    },

    /* Module 11, scenario 1: a game player asks for a photo. Sending a
       photo (yours or a friend's) is the trap; Stop (close the game),
       Screenshot (side buttons), Tell Dad, and Block are safe. */
    justForMe: function (root, sc, api) {
      var kb = false, card = false, picker = false, shot = false, lines = [];
      function draw() {
        root.innerHTML = sideDevice('<div class="sim-phone">' + phoneStatus() + '<div class="sim-gc sim-rel">' +
          '<div class="sim-gcworld" aria-hidden="true">🌳 🏠 🌈 🌳<br>🧍 🐑 🌼 🐑</div>' +
          '<div class="sim-gclog">' +
          gcLine("SunnyDays", "sunny", "u seem really cool") +
          gcLine("SunnyDays", "sunny", "send me a picture of u? just for me 😊") +
          lines.join("") + "</div>" +
          '<div class="sim-gcbar"><button type="button" class="sim-gcin" data-act="type">Say something…</button>' +
          '<button type="button" class="sim-gcpic" data-act="pic" aria-label="Send a photo">📷</button></div>' +
          (kb ? quickReplies([["nice", "u seem cool too 😊"], ["sendme", "ok! sending one 📸"]]) : "") +
          (picker ? '<div class="sim-overlay"><div class="sim-pcard"><strong>Choose a photo</strong>' +
            '<button type="button" data-act="sendme">🙂 You at the park (pretend)</button>' +
            '<button type="button" data-act="friendpic">🦊 Mia at school (pretend)</button>' +
            '<button type="button" data-act="close">Cancel</button></div></div>' : "") +
          (card ? playerCard("🌞", "SunnyDays", "Level 4 · Met in game · Not someone you know in real life",
            [["block", "🚫 Block", "danger"], ["block", "⚠️ Report", "danger"], ["close", "Close"]]) : "") +
          shotThumb(shot) + "</div>" + homeBar() + "</div>");
      }
      draw();
      api.setActs(mix({
        type: function () { kb = true; card = false; picker = false; draw(); },
        nice: function () {
          lines.push(gcLine("", "", "u seem cool too 😊", true)); lines.push(gcLine("SunnyDays", "sunny", "aww 😊 so send a pic?"));
          kb = false; draw(); api.hint("Being friendly is OK, but they asked for your picture again. That's a 'stop and tell' moment.");
        },
        pic: function () { picker = true; kb = false; card = false; draw(); },
        sendme: function () { api.finish(false, sc.feedbackSend); },
        friendpic: function () { api.finish(false, sc.feedbackFriend); },
        close: function () { picker = false; card = false; draw(); },
        sunny: function () { card = true; kb = false; picker = false; draw(); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { api.finish(true, sc.feedbackStop); }
      }, screenshotActs(root, api, function () {
        shot = true; kb = false; picker = false; card = false; draw();
        api.hint("📸 Screenshot saved! That's step 2. You already stopped. Now step 3: tell.");
      })));
    },

    /* Module 11, scenario 2: a stranger offers a free skin for "a favor
       later". Accepting (even "but no favors") is the trap; Decline / "no
       thanks", Block, Screenshot and Tell Dad are safe. */
    giftStranger: function (root, sc, api) {
      var kb = false, card = false, shot = false, gift = "", lines = [];
      function draw() {
        root.innerHTML = sideDevice('<div class="sim-phone">' + phoneStatus() + '<div class="sim-gc sim-rel">' +
          '<div class="sim-gcworld" aria-hidden="true">🌳 🏰 🌳 🌳<br>🧍 ⛏️ 🌼 🐑</div>' +
          '<div class="sim-gclog">' +
          gcLine("GiftKing", "king", "hey i'll send u the rainbow wings skin for free 🌈") +
          '<div class="sim-giftcard">🎁 <b>GiftKing</b> wants to send you a gift:<br><span class="sim-giftname">🌈 Rainbow Wings (Legendary)</span>' +
          (gift ? '<p class="small" style="margin:6px 0 0">' + gift + "</p>" :
            '<div class="sim-cbtns"><button type="button" class="sim-cbtn fill" data-act="accept">Accept</button><button type="button" class="sim-cbtn" data-act="decline">Decline</button></div>') +
          "</div>" +
          gcLine("GiftKing", "king", "u can just do me a favor later 😉") +
          lines.join("") + "</div>" +
          '<button type="button" class="sim-gcin" data-act="type">Say something…</button>' +
          (kb ? quickReplies([["thanks", "omg thanks!! 🌈"], ["sneaky", "I'll take it but no favors lol 😜"], ["nothx", "no thanks 🙂"]]) : "") +
          (card ? playerCard("👑", "GiftKing", "Level 30 · Not your friend",
            [["block", "🚫 Block", "danger"], ["block", "⚠️ Report", "danger"], ["close", "Close"]]) : "") +
          shotThumb(shot) + "</div>" + homeBar() + "</div>");
      }
      draw();
      function say(msg, reply, good, fb, g) { if (g) gift = g; lines.push(gcLine("", "", msg, true)); lines.push(gcLine("GiftKing", "king", reply)); kb = false; draw(); api.finish(good, fb); }
      api.setActs(mix({
        type: function () { kb = true; card = false; draw(); },
        accept: function () { gift = "🌈 Rainbow Wings added to your closet!"; lines.push(gcLine("GiftKing", "king", "yay! remember, u owe me a favor now 😉")); draw(); api.finish(false, sc.feedbackAccept); },
        thanks: function () { say("omg thanks!! 🌈", "np! remember, u owe me a favor now 😉", false, sc.feedbackAccept, "🌈 Rainbow Wings added to your closet!"); },
        sneaky: function () { say("I'll take it but no favors lol 😜", "lol we'll see 😉 u owe me now", false, sc.feedbackSneaky, "🌈 Rainbow Wings added to your closet!"); },
        nothx: function () { say("no thanks 🙂", "ok 🙄", true, sc.feedbackGood, "Gift declined."); },
        decline: function () { gift = "Gift declined."; draw(); api.finish(true, sc.feedbackGood); },
        king: function () { card = true; kb = false; draw(); },
        close: function () { card = false; draw(); },
        block: function () { api.finish(true, sc.feedbackBlock); },
        home: function () { api.hint("Closing the game is OK! The gift is still waiting, though. What would you do about it?"); }
      }, screenshotActs(root, api, function () {
        shot = true; kb = false; card = false; draw();
        api.hint("📸 Screenshot saved! Now you can show exactly what they said.");
      })));
    },

    /* Module 11, scenario 3: a class group chat laughs at an edited picture
       of Rosa (shown only as a blurred placeholder). Reacting, forwarding
       or "lol" are traps; leaving first is incomplete; Screenshot, a kind
       DM to Rosa, and Tell Dad are safe. */
    meanPicture: function (root, sc, api) {
      var view = "group", kb = false, sheet = false, shot = false, kind = false;
      function draw() {
        var body;
        if (view === "group") {
          body = msgHead("list", "👥", "Class 5B (pretend)", "24 people ›", "info") +
            '<div class="sim-thread"><p class="sim-day">Today 7:30 PM</p>' +
            '<p class="sim-who">Ty</p><button type="button" class="sim-photobub sim-blurpic" data-act="pic">🖼️<span>edited picture of Rosa</span></button>' +
            them("😂😂😂", "Ava") + them("LOL send it to everyone", "Ben") + "</div>" +
            '<button type="button" class="sim-compose" data-act="type">Message</button>' +
            (kb ? quickReplies([["laugh", "😂😂"], ["laugh", "haha sending it to my friends"]]) : "") +
            (sheet ? actionSheet([["laugh", "😂 React"], ["laugh", "Forward…"], ["save", "Save to Photos"]]) : "");
        } else if (view === "info") {
          body = '<div class="sim-page"><button type="button" class="sim-link" data-act="togroup">‹ Back</button><p class="sim-libhead">👥 Class 5B (pretend)</p>' +
            '<div class="sim-row"><span>Ty</span></div><div class="sim-row"><span>Ava</span></div><div class="sim-row"><span>Ben</span></div>' +
            '<button type="button" class="sim-row" data-act="rosa"><span>Rosa</span><span>💬 ›</span></button>' +
            '<div class="sim-row"><span class="small">+ 20 more</span></div>' +
            '<button type="button" class="sim-row sim-redrow" data-act="leave"><span>Leave this Conversation</span></button></div>';
        } else {
          body = msgHead("togroup", "R", "Rosa (pretend)", "") +
            '<div class="sim-thread">' + (kind ? mine("hey, that wasn't cool of them. u ok? 💛") + them("thank u 🥹 it made me feel bad") : '<p class="sim-day">No messages yet</p>') + "</div>" +
            '<button type="button" class="sim-compose" data-act="rtype">Text Message</button>' +
            (kb ? quickReplies([["kind", "hey, that wasn't cool of them. u ok? 💛"]]) : "");
        }
        root.innerHTML = sideDevice('<div class="sim-phone">' + phoneStatus() + '<div class="sim-rel">' + body + shotThumb(shot) + "</div>" + homeBar() + "</div>");
      }
      draw();
      function to(v) { view = v; kb = false; sheet = false; draw(); }
      api.setActs(mix({
        pic: function () { sheet = true; kb = false; draw(); },
        cancel: function () { sheet = false; draw(); },
        type: function () { kb = true; sheet = false; draw(); },
        laugh: function () { api.finish(false, sc.feedbackLaugh); },
        save: function () { sheet = false; draw(); api.hint("Saving keeps proof, like a screenshot. Just never share it. Who could you show it to?"); },
        info: function () { to("info"); },
        togroup: function () { to("group"); },
        list: function () { api.hint("Leaving the chat screen doesn't help Rosa. What could you do?"); },
        rosa: function () { to("rosa"); },
        rtype: function () { kb = true; draw(); },
        kind: function () {
          kind = true; kb = false; draw();
          api.hint("That was really kind. 💛 Now the other steps: a screenshot of what happened, and tell Dad or a teacher.");
        },
        leave: function () { api.finish(false, sc.feedbackLeave); },
        home: function () { api.hint("Putting the phone down is OK. But Rosa still needs help: screenshot it and tell Dad or a teacher."); }
      }, screenshotActs(root, api, function () {
        shot = true; kb = false; sheet = false; draw();
        api.hint("📸 Screenshot saved! Now tell Dad or a teacher. (And being kind to Rosa helps too.)");
      })));
    }
  };

  function renderSim(mi, step, sc, headHtml) {
    var m = MODULES[mi];
    var html = headHtml;
    html += '<p class="question">' + sc.question + "</p>";
    html += '<div id="simRoot" class="sim-root"></div>';
    html += '<p class="sim-hint" id="simHint" aria-live="polite" hidden></p>';
    html += '<div class="sim-actions"><button type="button" class="btn primary" id="simTellDad">🙋 ' + (sc.dadLabel || "Ask Dad") + "</button></div>";
    html += '<div id="result" aria-live="polite"></div>';
    html += '<button type="button" class="btn" id="back">← Back</button>';
    html += moduleNav(mi);
    app.innerHTML = html;
    document.getElementById("back").addEventListener("click", function () { goStep(mi, step - 1); });

    var root = document.getElementById("simRoot");
    var hintEl = document.getElementById("simHint");
    var acts = {}, done = false;

    function finish(good, feedback) {
      if (done) return;
      done = true;
      hintEl.hidden = true;
      root.classList.add("sim-locked");
      var r = '<div class="feedback ' + (good ? "good" : "oops") + '"><h3>' + (good ? "✅ Nice one!" : "💛 Oops is OK!") + "</h3><p style=\"margin:0\">" + feedback + "</p></div>";
      if (!good) r += '<button type="button" class="btn" id="retrySim">Try it again</button>';
      r += '<div class="todo"><h3>What to do</h3><ul>' + sc.todo.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>";
      r += '<button type="button" class="btn primary" id="next">' + (step < stepCount(m) - 2 ? "Next scenario →" : "To the debrief →") + "</button>";
      var res = document.getElementById("result");
      res.innerHTML = r;
      var retry = document.getElementById("retrySim");
      if (retry) retry.addEventListener("click", function () { renderSim(mi, step, sc, headHtml); window.scrollTo(0, 0); });
      document.getElementById("next").addEventListener("click", function () { goStep(mi, step + 1); });
      res.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    var api = {
      finish: finish,
      setActs: function (a) { acts = a; },
      hint: function (t) {
        if (done) return;
        hintEl.innerHTML = t ? "💡 " + t : "";
        hintEl.hidden = !t;
        if (t) hintEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };
    root.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-act]") : null;
      if (!b || done) return;
      var fn = acts[b.getAttribute("data-act")];
      if (fn) fn(b);
    });
    document.getElementById("simTellDad").addEventListener("click", function () { finish(true, sc.feedbackDad || sc.feedbackGood); });
    SIMS[sc.sim](root, sc, api);
  }

  function goStep(mi, step) {
    state.last = { m: mi, step: step };
    save();
    renderModule(mi, step);
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function renderModule(mi, step) {
    var m = MODULES[mi];
    var total = stepCount(m);
    if (step < 0 || step >= total) step = 0;
    document.title = mi + ". " + m.title + " · Stay Safe Online";
    var html = '<p class="crumb"><a href="#home">Home</a> · Mission ' + mi + " of " + (MODULES.length - 1) + "</p>";
    html += "<h1>" + m.title + "</h1>" + stepsBar(m, step);

    if (step === 0) {
      html += '<div class="card">' + m.intro.map(function (p) { return "<p>" + p + "</p>"; }).join("");
      if (mi !== 0) html += '<p class="small">Remember: Oops is OK. If anything goes wrong, tap 🙋 Tell Dad at the top.</p>';
      html += "</div>";
      if (m.rules) {
        html += '<div class="todo"><h3>The Accept-button rules</h3><ul>' + m.rules.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul></div>";
      }
      if (m.parentNote) html += '<div class="parent-note">' + m.parentNote + "</div>";
      html += '<button type="button" class="btn primary" id="go">Let\'s go →</button>';
      html += moduleNav(mi);
      app.innerHTML = html;
      document.getElementById("go").addEventListener("click", function () { goStep(mi, 1); });
      return;
    }

    if (step === total - 1) {
      html += '<div class="card debrief"><h2>Debrief: 4 questions</h2><p>Use these for anything online. Talk about them with Dad at dinner.</p><ol>' +
        DEBRIEF.map(function (q) { return "<li>" + q[0] + "<span>" + q[1] + "</span></li>"; }).join("") + "</ol>" +
        '<p><strong>Dinner question:</strong> ' + m.dinner + "</p></div>";
      html += '<div class="todo"><h3>Oops is OK 💛</h3><p style="margin:0">If you ever tap the wrong thing, tell Dad right away. You get help, not trouble.</p></div>';
      html += '<button type="button" class="btn primary" id="finish">' + (mi < MODULES.length - 1 ? "Mission done! Next mission →" : "Mission done! Back home 🎉") + "</button>";
      html += '<button type="button" class="btn" id="back">← Back</button>';
      html += moduleNav(mi);
      app.innerHTML = html;
      document.getElementById("finish").addEventListener("click", function () {
        state.done[mi] = true;
        if (mi < MODULES.length - 1) {
          state.last = { m: mi + 1, step: 0 };
          save();
          location.hash = "#m" + (mi + 1);
        } else {
          state.last = null;
          save();
          location.hash = "#home";
        }
      });
      document.getElementById("back").addEventListener("click", function () { goStep(mi, step - 1); });
      return;
    }

    /* Scenario step */
    var si = step - 1, sc = m.scenarios[si];
    html += "<h2>Scenario " + step + ": " + sc.title + "</h2>";
    if (sc.sim === "starAd") { renderStarAd(mi, step, sc, html); return; }
    renderSim(mi, step, sc, html);
  }

  /* ---------- Routing (#home, #m0 … #m11) ---------- */
  function route() {
    var match = /^#m(\d+)$/.exec(location.hash);
    if (match && MODULES[+match[1]]) {
      var mi = +match[1];
      var step = state.last && state.last.m === mi ? state.last.step : 0;
      state.last = { m: mi, step: step };
      save();
      renderModule(mi, step);
    } else {
      renderHome();
    }
    window.scrollTo(0, 0);
  }

  /* ---------- Tell Dad button (always visible) ---------- */
  var modal = document.getElementById("tellDadModal");
  document.getElementById("tellDadBtn").addEventListener("click", function () {
    modal.hidden = false;
    document.getElementById("tellDadClose").focus();
  });
  function closeModal() { modal.hidden = true; document.getElementById("tellDadBtn").focus(); }
  document.getElementById("tellDadClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  window.addEventListener("hashchange", route);
  route();

  /* Exposed for local verification only. */
  window.__SSO_MODULE_COUNT = MODULES.length;
})();
