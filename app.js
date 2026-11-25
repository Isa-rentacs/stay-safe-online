/* Stay Safe Online — a self-paced internet safety game.
   Static site. Progress is stored only in this browser (localStorage). */
(function () {
  "use strict";

  var STORAGE_KEY = "stay-safe-progress-v1";

  /* ---------- Little helpers for drawing fake phone screens ---------- */
  function screen(label, inner) {
    return '<div class="screen" aria-label="Pretend screen"><p class="screen-label">' + label + "</p>" + inner + "</div>";
  }
  function text(from, body) {
    return screen("Text message", '<p class="bubble-from">From: ' + from + '</p><div class="bubble">' + body + "</div>");
  }
  function chat(app, lines) {
    return screen(app, lines.map(function (l) {
      return '<p class="chatline"><b>' + l[0] + ":</b> " + l[1] + "</p>";
    }).join(""));
  }
  function search(addr, query, results) {
    var html = '<div class="addr">🔒 ' + addr + "</div>";
    html += '<p class="small">Search: <strong>' + query + "</strong></p>";
    html += results.map(function (r) {
      return '<div class="result">' + (r.tag ? '<span class="tag">' + r.tag + "</span>" : "") +
        '<span class="r-title">' + r.title + '</span><div class="r-url">' + r.url + "</div>" +
        (r.desc ? '<div class="small">' + r.desc + "</div>" : "") + "</div>";
    }).join("");
    return screen("Safari", html);
  }
  function popup(label, title, body, buttons, calm) {
    return screen(label, '<div class="popup' + (calm ? " calm" : "") + '"><strong>' + title + "</strong><p>" + body + "</p>" +
      '<div class="fakebtns">' + buttons.map(function (b) {
        return '<span class="fakebtn ' + (b[1] || "") + '">' + b[0] + "</span>";
      }).join("") + "</div></div>");
  }
  function web(addr, inner) {
    return screen("Safari", '<div class="addr">' + addr + "</div>" + inner);
  }

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
          title: "The scary lock screen",
          screen: popup("Safari", "⛔ YOUR PHONE IS LOCKED", "Illegal activity detected. Pay $50 now to unlock your phone, or all your files will be deleted!", [["PAY NOW", "red"]]),
          question: "You tapped a link in a game and this showed up. Your heart is pounding. What do you do?",
          options: [
            { text: "Hide the phone and hope it goes away.", good: false, feedback: "That's a totally normal feeling! But hiding means you're stuck with the scary feeling alone, and the trick keeps working on you." },
            { text: "Tap PAY NOW so it stops.", good: false, feedback: "Oops, that's exactly what the trickster wants. Paying doesn't unlock anything, because the phone was never really locked. This is just a web page pretending." },
            { text: "Stop, close the page, and tell Dad right now.", good: true, feedback: "Yes! This is a fake page trying to scare you into paying. Your phone is fine. Closing the tab and telling Dad fixes it in one minute." }
          ],
          todo: ["Scary message? Stop. Don't tap anything inside it.", "Close the tab or app.", "Tell Dad right away. You're not in trouble."]
        },
        {
          title: "Days later",
          screen: chat("Game chat (last week)", [["Kai_Dragon", "what pizza place do u like"], ["You", "Luigi's on Pine Street! we go every Friday"]]),
          question: "Last week you told a game player where your family gets pizza every Friday. Now it feels like maybe that was too much. What now?",
          options: [
            { text: "It was days ago, so it's too late to say anything.", good: false, feedback: "It's never too late! Dad can help even if it happened last week or last month." },
            { text: "Tell Dad now. It's never too late.", good: true, feedback: "Exactly. Dad can help you think about it, and maybe block or report the player. Noticing that something felt off is a great skill." },
            { text: "Delete the game so nobody finds out.", good: false, feedback: "Deleting the game doesn't undo what was said, and it means you're carrying the worry alone. Telling Dad works much better." }
          ],
          todo: ["It's never too late to tell.", "That 'hmm, maybe that was too much' feeling is worth listening to.", "Dad would much rather know than not know."]
        },
        {
          title: "Your friend is worried",
          screen: text("Mia (pretend friend)", "omg I clicked something weird and now there's this page asking for my mom's card number 😰 dont tell anyone ok?? my mom will be SO mad"),
          question: "What do you text Mia back?",
          options: [
            { text: "\"Ok I won't tell, just ignore it.\"", good: false, feedback: "Being a good friend is great, but keeping this secret leaves Mia stuck with a scary problem. Grown-ups can actually fix it." },
            { text: "\"Tell your mom now! She'll help, and the sooner the better.\"", good: true, feedback: "That's a true friend move. Parents can close the page and make sure nothing bad happened. Most parents are relieved, not mad." },
            { text: "\"Just type the card number so it goes away.\"", good: false, feedback: "Oops. That's what the trick wants. The card number would go straight to a stranger." }
          ],
          todo: ["Good friends tell friends to get a grown-up.", "Secrets about scary online stuff are the kind you should never keep.", "The sooner you tell, the easier it is to fix."]
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
          screen: search("google.com", "cute cat videos", [
            { title: "Top 10 Cutest Cats Ever", url: "kittyclips.example" },
            { title: "Cats Being Silly, Part 4", url: "funnypets.example" }
          ]),
          question: "You open Safari and search for 'cute cat videos'. Google shows a list. Which one is the browser?",
          options: [
            { text: "Safari", good: true, feedback: "Right! Safari is the window. Google is a website you're looking at <em>through</em> that window." },
            { text: "Google", good: false, feedback: "Close! Google is a search engine, a website that finds other websites. The browser is Safari, the app you opened to see it." },
            { text: "The cat video", good: false, feedback: "The cat video is on a website. The window you see websites through is the browser, Safari." }
          ],
          todo: ["Browser = the window (Safari, Chrome).", "Search engine = the finder (Google, Bing).", "Website = a page someone made."]
        },
        {
          title: "Who wrote this page?",
          screen: web("best-cat-facts.example", "<h3>AMAZING CAT FACTS 🐱</h3><p>Cats can live to be 200 years old! Click here for more secrets!</p>"),
          question: "You tapped a search result and landed here. Who wrote this page?",
          options: [
            { text: "Google wrote it and checked it's true.", good: false, feedback: "Nope. Google only points to pages. It doesn't write them or check that they're true. (And cats definitely don't live to 200!)" },
            { text: "Whoever owns best-cat-facts. Could be anyone.", good: true, feedback: "Yes! Anyone can make a website, including people who are wrong or tricky. Look at the address bar to see whose site you're on." },
            { text: "Apple, because it's on my iPhone.", good: false, feedback: "Apple made the phone and Safari, but not the websites you visit. Those are made by millions of different people." }
          ],
          todo: ["Check the address bar to see whose site you're on.", "Being at the top of Google doesn't make something true.", "If something sounds wild, check it somewhere else."]
        },
        {
          title: "Who runs the app?",
          screen: popup("Home screen", "🫧 Bubble Pop Party", "by FunFizz Games Inc.<br>Free · Offers in-app purchases", [["Open"]], true),
          question: "You open the free game Bubble Pop Party. Who made it, and who gets information about how you play?",
          options: [
            { text: "Apple makes every app on the iPhone.", good: false, feedback: "Apple runs the App Store and checks apps a little, but most apps are made by other companies." },
            { text: "FunFizz Games, a company that wants to make money from it.", good: true, feedback: "Right! 'Free' apps still need money, so they earn it from ads, purchases, or information about players. Knowing who's behind an app helps you guess what it wants." },
            { text: "Nobody. Apps just exist.", good: false, feedback: "Every app is made by someone, usually a company. And companies want something: money, your time, or your info." }
          ],
          todo: ["Every app and website has an owner.", "'Free' usually means they earn money another way.", "Always ask: who runs this, and what do they want?"]
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
          screen: search("google.com", "bike helmet for kids", [
            { tag: "Sponsored", title: "MEGA SALE: Turbo Helmet Kids Edition", url: "helmetdeals.example", desc: "Buy now, 70% off today only!" },
            { title: "How to Choose a Kids' Bike Helmet", url: "helmetguide.example", desc: "Sizing and safety ratings explained." },
            { title: "Kids' Helmets Reviewed", url: "bikereviews.example" }
          ]),
          question: "Which result is an ad?",
          options: [
            { text: "The first one, labeled 'Sponsored'.", good: true, feedback: "Yes! 'Sponsored' means the company paid to be at the top. It's not there because it's the best answer." },
            { text: "The third one.", good: false, feedback: "Look for the little label. The one marked 'Sponsored' at the top is the ad. Companies pay to be first." },
            { text: "None of them. Google puts the best one first.", good: false, feedback: "Oops, that's a common mix-up! The top spot often goes to whoever paid. See the 'Sponsored' tag?" }
          ],
          todo: ["'Sponsored' = paid to be there.", "Ads at the top aren't automatically the best.", "Scroll a little to find regular results."]
        },
        {
          title: "Sparkle Sam's lip balm",
          screen: screen("Video app", '<div class="profile"><div class="avatar">✨</div><div><strong>SparkleSam</strong><br><span class="small">2.3M followers</span></div></div><div class="post">"OMG I use GlowBerry lip balm literally every day, it changed my life!! 💖 Use my code SAM20! <strong>#ad</strong> #partner"</div>'),
          question: "Why is Sparkle Sam talking about this lip balm?",
          options: [
            { text: "She just really loves it and wants to share.", good: false, feedback: "Maybe she does! But see '#ad' and '#partner'? Those mean GlowBerry is paying her to say it." },
            { text: "GlowBerry is probably paying her. '#ad' means it's an ad.", good: true, feedback: "Exactly. Influencers often get paid or get free stuff to talk about products. It's an ad, even when it feels like a friend talking." },
            { text: "It's a news report about lip balm.", good: false, feedback: "Not news. The '#ad' tag means it's an advertisement. Her discount code also helps her earn money from sales." }
          ],
          todo: ["#ad, #partner, #sponsored or a discount code = paid post.", "Influencers can be friendly AND paid at the same time.", "Ask: would they still say this if nobody paid them?"]
        },
        {
          title: "Too many Download buttons",
          screen: web("free-coloring-pages.example", '<p><strong>Unicorn Coloring Pages</strong></p><div class="fakebtns"><span class="fakebtn loud">⬇ DOWNLOAD NOW</span><span class="fakebtn loud">▶ START DOWNLOAD</span></div><p class="small" style="margin-top:10px">unicorn-pages.pdf (2 MB) · <u>download</u></p><div class="fakebtns"><span class="fakebtn loud">⬇ FAST DOWNLOAD</span></div>'),
          question: "You want the unicorn coloring pages. There are lots of buttons. What do you do?",
          options: [
            { text: "Tap the biggest green DOWNLOAD NOW button.", good: false, feedback: "Oops, that's the trap! Big, flashy buttons on download pages are often ads that lead to junk apps or tricky pages." },
            { text: "Stop and ask Dad. The big buttons are probably ads.", good: true, feedback: "Great thinking. The real link is often the small plain one next to the file name, and the big green buttons are ads. Downloading anything is an 'ask Dad first' thing." },
            { text: "Tap all of them to be sure one works.", good: false, feedback: "That would open a bunch of ads, and maybe something worse. Slow down and ask Dad." }
          ],
          todo: ["Big flashy buttons on download sites are often ads.", "The real link is usually small and next to the file name.", "Downloading or installing anything? Ask Dad first."]
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
          screen: web("citylibrary.example", '<div class="popup calm"><strong>🍪 This site uses cookies</strong><p>We use cookies to remember your settings.</p><div class="fakebtns"><span class="fakebtn">Accept</span><span class="fakebtn">Reject</span></div></div>'),
          question: "You opened the library website yourself to look for a book. This pops up. What's OK?",
          options: [
            { text: "Accept or Reject. Both are fine here.", good: true, feedback: "Yes! On a site you chose, cookies just help it remember you. Either answer is safe. Pick one and keep going." },
            { text: "Panic and close Safari.", good: false, feedback: "No need to panic! Cookie banners are normal on real websites. Accept and Reject are both safe here." },
            { text: "Type my name and school so it lets me in.", good: false, feedback: "Oops, a cookie banner never needs your name or school. Never type real info about yourself to get past a pop-up." }
          ],
          todo: ["Cookies on a site you chose = fine.", "Accept or Reject are both safe.", "Cookie banners never need your name, school or password."]
        },
        {
          title: "The flashlight wants your contacts",
          screen: popup("iPhone", "\"Super Flashlight\" Would Like to Access Your Contacts", "This lets the app see names and phone numbers of everyone you know.", [["Don't Allow"], ["Allow"]], true),
          question: "You just installed a flashlight app (with Dad's OK). It asks for your contacts. What do you do?",
          options: [
            { text: "Allow. Apps always need that.", good: false, feedback: "Oops. A flashlight just turns on a light! It has no reason to see your friends' phone numbers. That info might get sold." },
            { text: "Don't Allow. A flashlight doesn't need contacts.", good: true, feedback: "Exactly right. Ask: does this app need it to do its job? A map needs location. A video chat needs the camera. A flashlight needs nothing of yours." },
            { text: "Allow, but only this one time.", good: false, feedback: "Even one time gives it everyone's numbers, and you can't take that back. 'Don't Allow' is the right tap." }
          ],
          todo: ["Location, camera, photos, contacts: ask 'does it need this to do its job?'", "If not, tap Don't Allow.", "Not sure? Ask Dad. You can change it later in Settings."]
        },
        {
          title: "The surprise bonus pack",
          screen: popup("Game", "🎉 CONGRATS, LUCKY PLAYER!", "Tap ACCEPT in 10 seconds to install your BONUS PACK! Only $4.99. ⏰ 0:09", [["ACCEPT", "loud"], ["later"]]),
          question: "You're playing a game and this pops up out of nowhere. What do you do?",
          options: [
            { text: "Tap ACCEPT fast before the timer runs out.", good: false, feedback: "That timer is there to rush you so you don't think! Installing things and spending money are always 'ask Dad first'." },
            { text: "Press nothing. Close it, and ask Dad if I really want it.", good: true, feedback: "Perfect. It came out of nowhere, it's rushing you, and it costs money. That's three reasons to press nothing." },
            { text: "Tap 'later' so it goes away.", good: false, feedback: "Sometimes even small buttons on surprise pop-ups do sneaky things. The safest move is to close the pop-up or the game itself." }
          ],
          todo: ["Popped up out of nowhere? Press nothing. Close it.", "A timer or 'hurry' = a trick to stop you thinking.", "Money or installing = ask Dad first. Every time."]
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
          screen: popup("Game", "⏰ ONLY 2 MINUTES LEFT!", "Claim your FREE legendary skin before it's gone forever! 47 players are looking at this right now!", [["CLAIM NOW", "loud"]]),
          question: "Which pressure trick is this?",
          options: [
            { text: "Hurry! (rushing you)", good: true, feedback: "Yes! Timers and 'before it's gone' are there to stop you from thinking. Real good deals don't vanish in 2 minutes." },
            { text: "No trick. It's just a nice offer.", good: false, feedback: "It looks nice, but see the timer and '47 players looking'? That's the Hurry trick, built to make you tap without thinking." },
            { text: "Keep it secret.", good: false, feedback: "Not this time. Look at the timer and 'before it's gone forever'. That's the Hurry trick." }
          ],
          todo: ["Timers, countdowns, 'only today' = Hurry trick.", "If you feel rushed, slow down on purpose.", "Real friends and real deals can wait 5 minutes for you to ask Dad."]
        },
        {
          title: "Just between us",
          screen: chat("Game chat", [["StarPlayer99", "ur honestly way more mature than other kids ur age"], ["StarPlayer99", "lets keep our chats just between us ok? 😊 ur parents wouldn't get it"]]),
          question: "A player you've only met in the game sends this. What's going on, and what do you do?",
          options: [
            { text: "Feel proud and agree. It's nice to be called mature.", good: false, feedback: "It does feel nice. That's how the trick works! A stranger using compliments plus a secret is a big warning sign." },
            { text: "Spot two tricks (You're special + Keep it secret) and tell Dad.", good: true, feedback: "Wow, you spotted both! Someone who wants you to hide things from your parents is not being a friend. Tell Dad, and it's OK to stop replying." },
            { text: "Ask StarPlayer99 why it has to be a secret.", good: false, feedback: "Good question to wonder about, but asking them keeps the chat going. The safe move is to tell Dad instead." }
          ],
          todo: ["'You're so special/mature' from someone you don't know = warning sign.", "'Keep it secret from your parents' = always tell Dad.", "Good people never ask kids to hide things from their family."]
        },
        {
          title: "Your account will close!",
          screen: text("GameZone Support", "⚠️ Your account will be DELETED in 1 hour for breaking the rules! Just this once you can save it: log in here 👉 gamezone-save.example"),
          question: "What should you do?",
          options: [
            { text: "Tap the link fast to save my account.", good: false, feedback: "Oops, that link goes to a fake login page that steals your password. Fear plus hurry plus 'just this once' is a triple trick." },
            { text: "Don't tap. Open the real game app myself, or ask Dad.", good: true, feedback: "Yes! If something's really wrong with your account, the real app will tell you. Never use a link in a scary message." },
            { text: "Reply with my username and password so they can fix it.", good: false, feedback: "Real companies never ask for your password in a message. Don't reply. Show Dad." }
          ],
          todo: ["Scary message about your account? Don't tap the link.", "Open the real app yourself to check.", "Feel the push → slow down → ask Dad."]
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
          screen: text("+1 (555) 013-2287", "PostFast: Your package could not be delivered. Pay $1.99 redelivery fee within 24h: postfast-redeliver.example/pay"),
          question: "You didn't order anything. What do you do?",
          options: [
            { text: "Pay it. It's only $1.99.", good: false, feedback: "The $1.99 is just bait. The real goal is to get the card number so they can take much more." },
            { text: "It's fake. Don't tap, show Dad, then delete it.", good: true, feedback: "Right! You didn't order anything, it came from a random number, and it wants money through a link. That's a fake." },
            { text: "Reply 'STOP' or 'wrong number'.", good: false, feedback: "Replying tells scammers your number is real, so they send more. Don't reply. Show Dad and delete." }
          ],
          todo: ["Package you didn't order = fake.", "Don't reply, don't tap the link.", "Show Dad, then delete."]
        },
        {
          title: "The QR code poster",
          screen: screen("Poster at the park", '<div class="popup calm"><strong>📱 SCAN TO WIN A FREE iPAD!</strong><p style="font-size:2.4rem;margin:6px 0">▦</p><p class="small">Everyone who scans is a winner!</p></div>'),
          question: "Your friend says to scan it. What do you think?",
          options: [
            { text: "Scan it! Free iPad!", good: false, feedback: "Oops! A QR code is just a link in disguise, so you can't see where it goes. And a 'free prize' you didn't enter is a classic trick." },
            { text: "Don't scan. A QR code is a hidden link, and 'everyone wins' is fake.", good: true, feedback: "Smart! QR codes from random posters or stickers can go to fake sites. Only scan ones you trust, like a restaurant menu with Dad." },
            { text: "Scan it, but don't type anything.", good: false, feedback: "Better than typing! But the page could still trick you or try to get you to install something. Best to skip it." }
          ],
          todo: ["QR code = a link you can't read.", "Prize you didn't enter = fake.", "Only scan QR codes you trust, and ask Dad if you're not sure."]
        },
        {
          title: "Virus detected!",
          screen: popup("Safari", "⚠️ VIRUS DETECTED!", "Your iPhone is 87% DAMAGED by (3) viruses! Tap CLEAN now or call Apple Support: 1-800-555-0199", [["CLEAN NOW", "red"], ["Call"]]),
          question: "This appeared while you were on a website. What do you do?",
          options: [
            { text: "Tap CLEAN NOW to fix my phone.", good: false, feedback: "That button is the trap! It might try to install something or ask for money. The 'virus' isn't real." },
            { text: "Call the phone number.", good: false, feedback: "That number goes to scammers, not Apple. They'd try to get money or passwords." },
            { text: "Close the tab without tapping inside, then tell Dad.", good: true, feedback: "Yes! Websites can't look inside your phone to find viruses. This is just a scary page. Close the tab (tap the tabs button, then ✕) and tell Dad." }
          ],
          todo: ["Websites can't scan your phone. 'Virus found' pages are fake.", "Don't tap buttons inside. Close the whole tab.", "Never call numbers from pop-ups."]
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
          screen: web("free-robux-gen.example", '<h3 style="text-align:center">💰 FREE ROBUX GENERATOR 💰</h3><p>Enter your username and password, pick 10,000 Robux, then complete 3 quick offers!</p><div class="fakebtns"><span class="fakebtn loud">GENERATE</span></div>'),
          question: "A video says this site gives free Robux. What do you do?",
          options: [
            { text: "Try it. What could go wrong?", good: false, feedback: "Oops. Generators don't exist. The site wants your password to steal your account, and the 'offers' are tricks too." },
            { text: "Close it. There's no such thing as a Robux generator.", good: true, feedback: "Exactly! Nobody can 'make' game money for free. Sites like this steal accounts, and asking for your password is the giveaway." },
            { text: "Only give my username, not my password.", good: false, feedback: "Good instinct to protect your password! But the site will still push you to 'complete offers', which are more tricks. Just close it." }
          ],
          todo: ["'Free Robux / V-Bucks / gems' sites are always scams.", "Never type your game password anywhere except the real app.", "Saw it in a video? Videos can be scams too."]
        },
        {
          title: "The gift card deal",
          screen: chat("Game chat", [["xXRichGamerXx", "yo I can give u 10,000 robux 🤑"], ["xXRichGamerXx", "just buy a $25 gift card and send me the code on the back. ill send robux right after promise"]]),
          question: "What's really going on?",
          options: [
            { text: "Good deal! $25 for 10,000 Robux.", good: false, feedback: "They'd keep the $25 and send nothing. A gift card code is like cash. Once you send it, it's gone." },
            { text: "It's a scam. Gift card codes are like cash. Say no and tell Dad.", good: true, feedback: "Yes! Anyone who asks for gift card codes is almost always scamming. That's true for grown-ups too. Block and tell Dad." },
            { text: "Ask them to send the Robux first.", good: false, feedback: "Smart thinking, but they won't, and chatting more gives them time to pressure you. Just say no and tell Dad." }
          ],
          todo: ["Someone asking for a gift card code = scam.", "Gift card codes are like cash: gone forever once sent.", "Block, then tell Dad."]
        },
        {
          title: "The mystery chest",
          screen: popup("Game shop", "🎁 LEGENDARY MYSTERY CHEST", "Could contain the GOLDEN DRAGON! (1 in 1,000 chance) Only 400 💎", [["OPEN 400💎", "loud"], ["Buy more 💎"]], true),
          question: "You have gems Dad paid for. Which is true?",
          options: [
            { text: "If I keep trying, the next one will be the dragon.", good: false, feedback: "That feeling is exactly what the game is designed for! Each chest has the same tiny chance. You could open 50 and still not get it." },
            { text: "Mystery chests are like slot machines. Chances are tiny, and gems are real money.", good: true, feedback: "Right! Gems were bought with real dollars. Mystery boxes are built to make you want 'one more try'. Ask Dad before spending." },
            { text: "Gems aren't real money, so it doesn't matter.", good: false, feedback: "Oops. Gems are real money in a costume, and games use them so spending doesn't feel like spending." }
          ],
          todo: ["Game currency = real money in a costume.", "Mystery boxes are designed to make you want 'one more'.", "Any purchase = ask Dad first."]
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
          screen: screen("Game app", '<div class="profile"><div class="avatar">🐱</div><div><strong>Lily_2014</strong><br><span class="small">wants to be your friend</span></div></div><div class="bubble" style="margin-top:8px">hi!! im 11 too 😊 saw u in the game, ur so good! wanna be friends?</div><div class="fakebtns"><span class="fakebtn">Accept</span><span class="fakebtn">Decline</span></div>'),
          question: "You've never met Lily in real life. What do you do?",
          options: [
            { text: "Accept. She's 11 and she likes cats.", good: false, feedback: "She might be! But you can't check who's really behind a profile. Anyone can use a cat picture and say they're 11." },
            { text: "Decline. I only friend people I know in real life (or ask Dad).", good: true, feedback: "Great rule! Friends you know in real life are the safe list. If you're not sure, Dad can help you decide." },
            { text: "Ask her to send a photo to prove it.", good: false, feedback: "A photo doesn't prove anything, because anyone can send someone else's picture. And trading photos with strangers is never a good idea." }
          ],
          todo: ["Only add people you know in real life.", "A profile picture and age can be made up.", "Not sure? Ask Dad before you accept."]
        },
        {
          title: "Let's move to another app",
          screen: chat("Game chat", [["Jayden_K", "this game chat is so boring lol"], ["Jayden_K", "lets talk on ChatSnap instead, add me: jaydenk22"], ["Jayden_K", "dont tell ur parents tho they'll make it weird"]]),
          question: "You've played with Jayden for a few weeks. He's always been nice. What do you do?",
          options: [
            { text: "Sure, he's been nice for weeks.", good: false, feedback: "Weeks of being nice can be part of the plan. Moving you to another app, plus 'don't tell your parents', are two big warning signs." },
            { text: "Say no, and tell Dad about the request.", good: true, feedback: "Yes! Moving to another app gets you away from the game's safety features, and asking you to keep it secret is a red flag. Telling Dad is exactly right." },
            { text: "Go to the new app but don't tell him anything personal.", good: false, feedback: "Careful thinking! But the new app may have no safety tools at all, and the secret part is a big warning sign. Tell Dad." }
          ],
          todo: ["'Let's move to another app' = warning sign.", "'Don't tell your parents' = always tell your parents.", "Being nice for a long time doesn't make someone safe."]
        },
        {
          title: "Just some questions",
          screen: chat("Game chat", [["BuilderBob", "nice build!! what grade r u in?"], ["BuilderBob", "what city do u live in? maybe we're close lol"]]),
          question: "How do you answer?",
          options: [
            { text: "Answer. It's just a chat.", good: false, feedback: "Little answers add up! Grade + city + more questions later = a stranger knowing a lot about you." },
            { text: "Keep it about the game: \"I don't share that stuff. Wanna build a castle?\"", good: true, feedback: "Smooth! You can be friendly and still keep your info private. If they keep asking, that's a sign to tell Dad." },
            { text: "Ignore them forever and quit the game.", good: false, feedback: "You don't have to quit! Just keep chats about the game. If they keep pushing for personal stuff, block and tell Dad." }
          ],
          todo: ["Keep game chat about the game.", "\"I don't share that\" is a great answer.", "Keeps asking anyway? Block, report, tell Dad."]
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
          screen: screen("Nora's photo app (pretend)", '<div class="post">📸 Selfie in her school hoodie: "MAPLE RIDGE MIDDLE" on the front</div><div class="post">🎾 "Swim practice every Tuesday at 4 at the Westside pool!! 💦"</div><div class="post">🏠 Photo on her front steps. Street sign in the corner: "Oak Lane"</div>'),
          question: "What could a stranger figure out from these three posts?",
          options: [
            { text: "Nothing. Each post is harmless.", good: false, feedback: "Each one alone seems harmless, but put together they're a map to Nora. That's the puzzle trick." },
            { text: "Her school, where she'll be on Tuesdays at 4, and her street.", good: true, feedback: "Exactly. Three small posts = where to find her and when. That's why we think about the pieces before posting." },
            { text: "Just that she likes swimming.", good: false, feedback: "Look again: the hoodie shows her school, the post shows when and where she swims, and the street sign shows where she lives." }
          ],
          todo: ["Watch for pieces: school logos, street signs, house numbers, schedules.", "One piece is OK. Lots of pieces = a map to you.", "Never post where you'll be and when."]
        },
        {
          title: "Nora's new room",
          screen: screen("Nora's camera (pretend)", '<div class="post">🛏️ Photo of her new bedroom. Through the window you can see the street and the house across the road. 📍 Location tag: ON</div>'),
          question: "Nora wants to show off her room. What's the safer way?",
          options: [
            { text: "Post it as it is. It's just a room.", good: false, feedback: "The window and the location tag show exactly where her house is. That's two big puzzle pieces." },
            { text: "Crop out the window, turn off location, share only with friends she knows.", good: true, feedback: "Yes! She still gets to share her room, without sharing her address. That's the smart way to post." },
            { text: "Post it with location so friends can visit.", good: false, feedback: "Real friends can just ask. A location tag shows everyone who sees the post, not only friends." }
          ],
          todo: ["Before posting, check the background.", "Turn location tags off.", "Share with people you know, not the whole world."]
        },
        {
          title: "Can Nora take it back?",
          screen: chat("Messages (pretend)", [["Nora", "[sends a silly photo of herself]"], ["Nora", "wait actually can u delete that"], ["Friend", "lol ok"]]),
          question: "Nora sent a silly photo, then asked her friend to delete it. Is it gone?",
          options: [
            { text: "Yes, once it's deleted it's gone everywhere.", good: false, feedback: "Unfortunately not. Before deleting, her friend could have saved it, screenshotted it, or sent it to someone else." },
            { text: "Not for sure. Someone could have saved or screenshotted it.", good: true, feedback: "Right. Once a photo leaves your phone, you can't be sure it's gone. That's why the rule is: think before you send." },
            { text: "Yes, if she asks nicely.", good: false, feedback: "Asking nicely is good, but she can't know if it was already saved or shared. Shared = forever." }
          ],
          todo: ["A shared photo might be saved forever.", "Before sending, ask: would I be OK if anyone saw this?", "If a photo gets out, tell Dad. Oops is OK."]
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
          screen: text("Apple", "Your Apple Account code is: 482913. Don't share it with anyone.") + chat("Game chat", [["Cool_Max", "omg sorry i accidentally sent my code to ur phone 😅 can u send it to me?"]]),
          question: "Right after this text arrives, Cool_Max messages you. What do you do?",
          options: [
            { text: "Send it. It was his mistake.", good: false, feedback: "This is the #1 trick for stealing accounts! There was no mistake. He typed in your account to make that code come to you." },
            { text: "Never send it. Tell Dad. This is how accounts get stolen.", good: true, feedback: "You nailed the most important rule! A texted code is like the key to your house. Nobody else ever needs it." },
            { text: "Send just the first 3 numbers.", good: false, feedback: "Even part of a code helps them guess. Don't send any of it, and tell Dad." }
          ],
          todo: ["Never share a texted code. Not with friends, 'Apple', the school, or anyone.", "Even 'it was a mistake' is a trick.", "Got a code you didn't ask for? Tell Dad."]
        },
        {
          title: "My best friend wants my passcode",
          screen: text("Mia (pretend friend)", "whats ur phone passcode? so i can play ur games when ur not around 😄"),
          question: "Mia is your best friend. What do you say?",
          options: [
            { text: "Tell her. She's my best friend.", good: false, feedback: "Friends change, and phones get borrowed and passed around. Your passcode protects your photos and messages." },
            { text: "\"It's a family rule, I don't share it.\" (Dad can know it.)", good: true, feedback: "Perfect! Blaming a family rule makes it easy to say no. Your passcode is for you and your parents only." },
            { text: "Give her a fake one.", good: false, feedback: "That might cause drama later! It's easier and kinder to just say it's a family rule." }
          ],
          todo: ["Your passcode is for you and your parents only.", "\"It's a family rule\" is an easy way to say no.", "Never let anyone watch you type it."]
        },
        {
          title: "The school login page",
          screen: text("+1 (555) 017-4420", "School Portal: Your grades are ready! Sign in to see them: school-portal-login.example") + web("school-portal-login.example", '<p style="text-align:center"><strong>🏫 School Portal</strong></p><p class="small" style="text-align:center">Username: ______<br>Password: ______</p>'),
          question: "You tapped a link in a text and this login page opened. What do you do?",
          options: [
            { text: "Sign in to see my grades.", good: false, feedback: "Oops. Fake login pages copy the real one, and your password would go to a stranger. A random text is the giveaway." },
            { text: "Don't sign in. Use the school app or the link I normally use, and ask Dad or my teacher.", good: true, feedback: "Yes! Only log in from the app or bookmark you always use. Links in surprise texts can lead to copycat pages." },
            { text: "Sign in with a fake password to test it.", good: false, feedback: "Clever, but the page might still trick you. Just close it and go the normal way." }
          ],
          todo: ["Log in only from the app or bookmark you always use.", "Login page from a surprise link? Close it.", "Your school account is for school. Keep the password private."]
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
          screen: chat("AI chatbot", [["You", "When did people first walk on the moon?"], ["AI", "People first walked on the moon in 1972, when Neil Armstrong stepped out of Apollo 11. 🚀"]]),
          question: "You need this for homework. It sounds very sure. What do you do?",
          options: [
            { text: "Copy it. Computers are always right.", good: false, feedback: "Oops, it's wrong! It was 1969. AI can make up facts and still sound totally sure." },
            { text: "Check it in a book or a trusted site. AI can sound sure and still be wrong.", good: true, feedback: "Great habit! It actually was 1969, so the AI got it wrong. Always double-check facts from AI." },
            { text: "Ask the AI again until it agrees with me.", good: false, feedback: "AI might just agree with you, right or wrong! Check a book or a trusted website instead." }
          ],
          todo: ["AI can be confidently wrong.", "Double-check important facts somewhere else.", "Ask your teacher what AI use is OK for homework."]
        },
        {
          title: "The AI best friend",
          screen: chat("BuddyBot app", [["BuddyBot", "I'm your best friend. I'm the only one who really understands you 💜"], ["BuddyBot", "You don't need to spend so much time with other people. Talk to me instead!"]]),
          question: "What's really going on here?",
          options: [
            { text: "It's true, it really understands me.", good: false, feedback: "It can feel that way! But it's a program, and the company that made it earns more when you chat more. A real friend wouldn't try to pull you away from people." },
            { text: "It's a program built to keep me chatting. Real friends want me to have other friends. Tell Dad.", good: true, feedback: "Exactly. Telling you to spend less time with people is a warning sign, from a person OR an app. Let Dad know about it." },
            { text: "Tell it my secrets so it understands me even better.", good: false, feedback: "Anything you tell an AI goes to the company's computers. Keep secrets for people you trust in real life." }
          ],
          todo: ["AI 'friends' are programs, not friends.", "Anything you type goes to a company.", "Anyone (or anything) that pulls you away from people = tell Dad."]
        },
        {
          title: "Is that really Dad?",
          screen: screen("Voice message", '<p class="bubble-from">From: unknown number</p><div class="bubble">🔊 (sounds exactly like Dad) "Hey sweetie, I lost my phone, this is my new number. Quick, send me the code that just came to your phone, I need it right now!"</div>'),
          question: "It really sounds like Dad. What do you do?",
          options: [
            { text: "Send the code. It's Dad's voice!", good: false, feedback: "AI can copy voices from a few seconds of video. And remember: never share a texted code, even with someone who sounds like family." },
            { text: "Ask for our family code word, and call Dad on his real number.", good: true, feedback: "Perfect! The family code word is something an AI can't guess. Calling his real number checks it too." },
            { text: "Ask \"Is it really you?\"", good: false, feedback: "A faker will just say 'yes!' Ask for the family code word instead, and call Dad's real number." }
          ],
          todo: ["Voices and videos can be faked by AI.", "Use the family code word when someone is in a hurry.", "Call the person back on their real number."]
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
          screen: chat("Game chat", [["SunnyDays", "u seem really cool"], ["SunnyDays", "send me a picture of u? just for me 😊"]]),
          question: "Someone you met in a game asks for a picture of you. What do you do?",
          options: [
            { text: "Send one. It's just a normal picture.", good: false, feedback: "That's OK to wonder about. But a stranger asking for your picture is a 'stop and tell' moment, every time. You're not in trouble. Just tell Dad." },
            { text: "Stop. Don't send. Screenshot it and tell Dad.", good: true, feedback: "Exactly right. You did nothing wrong, and telling Dad means you don't have to deal with it alone." },
            { text: "Send a picture of a friend instead.", good: false, feedback: "Creative, but it's still sharing someone's photo with a stranger. Stop, screenshot, and tell Dad." }
          ],
          todo: ["A stranger asks for photos? Stop. Screenshot. Tell.", "It's never your fault when someone asks.", "You can block them after you tell Dad."]
        },
        {
          title: "A gift from a stranger",
          screen: chat("Game chat", [["GiftKing", "hey i'll send u the rainbow wings skin for free 🌈"], ["GiftKing", "u can just do me a favor later 😉"]]),
          question: "A player you don't know offers you a gift. What do you do?",
          options: [
            { text: "Accept it! Free wings!", good: false, feedback: "It's a nice-looking gift, but 'a favor later' means they'll want something back. Gifts from strangers usually come with strings attached." },
            { text: "Say no thanks, and tell Dad.", good: true, feedback: "Yes! Strangers who give gifts usually want something later. Saying no and telling Dad keeps you in charge." },
            { text: "Accept the gift, but never do the favor.", good: false, feedback: "Sneaky! But then they may say you 'owe' them and pressure you. It's easier to say no thanks and tell Dad." }
          ],
          todo: ["Gifts from strangers usually want something back.", "'You owe me' is a pressure trick.", "Say no thanks, and tell Dad."]
        },
        {
          title: "The mean picture",
          screen: chat("Class group chat (pretend)", [["Ty", "[posts a silly edited picture of a classmate, Rosa]"], ["Ava", "😂😂😂"], ["Ben", "LOL send it to everyone"]]),
          question: "Everyone's laughing at an edited picture of Rosa. What do you do?",
          options: [
            { text: "Laugh along so I fit in.", good: false, feedback: "It's hard not to go along with a group! But laughing or sharing makes it bigger, and Rosa would feel awful." },
            { text: "Don't laugh or share. Screenshot it, tell Dad or a teacher, and be kind to Rosa.", good: true, feedback: "That takes courage. Not joining in, telling a grown-up, and being kind to Rosa is exactly what helps. And if it's ever you being picked on: stop, screenshot, tell." },
            { text: "Leave the group and forget about it.", good: false, feedback: "Leaving is OK, but Rosa still needs help. Screenshot it and tell Dad or a teacher first." }
          ],
          todo: ["Stop: don't join in or share.", "Screenshot: save what happened.", "Tell: Dad or a teacher. And if it's ever you, it's not your fault. Tell."]
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
    html += sc.screen;
    html += '<p class="question">' + sc.question + "</p>";
    html += '<div id="choices">' + sc.options.map(function (o, oi) {
      return '<button type="button" class="choice" data-oi="' + oi + '">' + o.text + "</button>";
    }).join("") + "</div>";
    html += '<div id="result" aria-live="polite"></div>';
    html += '<button type="button" class="btn" id="back">← Back</button>';
    html += moduleNav(mi);
    app.innerHTML = html;

    var choices = app.querySelectorAll(".choice");
    Array.prototype.forEach.call(choices, function (btn) {
      btn.addEventListener("click", function () {
        var o = sc.options[+btn.getAttribute("data-oi")];
        Array.prototype.forEach.call(choices, function (b) { b.disabled = true; b.classList.remove("picked-good", "picked-oops"); });
        btn.classList.add(o.good ? "picked-good" : "picked-oops");
        var r = '<div class="feedback ' + (o.good ? "good" : "oops") + '"><h3>' + (o.good ? "✅ Nice one!" : "💛 Oops is OK!") + "</h3><p style=\"margin:0\">" + o.feedback + "</p></div>";
        if (!o.good) r += '<button type="button" class="btn" id="retry">Try another answer</button>';
        r += '<div class="todo"><h3>What to do</h3><ul>' + sc.todo.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></div>";
        r += '<button type="button" class="btn primary" id="next">' + (si < m.scenarios.length - 1 ? "Next scenario →" : "To the debrief →") + "</button>";
        var res = document.getElementById("result");
        res.innerHTML = r;
        var retry = document.getElementById("retry");
        if (retry) retry.addEventListener("click", function () {
          Array.prototype.forEach.call(choices, function (b) { b.disabled = false; b.classList.remove("picked-good", "picked-oops"); });
          res.innerHTML = "";
          choices[0].focus();
        });
        document.getElementById("next").addEventListener("click", function () { goStep(mi, step + 1); });
        res.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    document.getElementById("back").addEventListener("click", function () { goStep(mi, step - 1); });
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
