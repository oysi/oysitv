---
title: "First post"
excerpt: "Excerpt"
created_at: "2022.03.01"
updated_at: "2022.03.06"
visible: "false"
---

```lua
print("Hello, World!")
```

Hello! I am Oysi and this is my first blog post. I created this website as a learning experience and personal challenge, as well as a place to store and share future creations. I never planned on creating a blog, but it turned out to be a good way of learning how the various tools work. In this post I will take you through the steps I took to create this website.

I will preface this by saying: If you just want to get a website up and running, use a CMS. With a CMS you can create a website like this in minutes. However, that sort of defeats the purpose of learning how things work behind the scenes, so for me this was not an option.

## Domain

The first thing I did was purchase a domain. Oysi is my nickname, so that's an obvious domain for a personal website. Interestingly, the `.tv` TLD (top-level domain) does not stand for television. It is in fact the country code for Tuvalu, an island nation in Oceania. I chose this TLD because it's short, recognizeable... and all the mainstream ones like `.com` and `.net` were already taken.

## Server

The server runs Debian Linux, but really the operating system doesn't matter. All the tools I've used so far are completely cross-platform and open source. Although it's worth mentioning that in the server world, you're pretty much always better off with some variant of linux.

The server uses Nginx configured as a reverse proxy. Nginx handles all traffic in and out, and encrypts it with HTTPS. (You should see a padlock next to the URL in your browser)

## Frontend

At first I started with Express.js to serve static HTML pages. Though I quickly realized I would be repeating myself too much if I were to scale up the website to any meaningful degree. Then I found React, which was pretty great, but I didn't particularly like how it did routing.

Now here's where I made a mistake. I thought it was a choice between Next.js and React. Turns out Next.js **is** React, just with some additional bells and whistles. Most importantly, it has built-in directory-based routing, which is exactly what I was looking for.

## Blog

Now we get to this page, the blog. I decided to use markdown for the blog posts. As with most things in programming, there's a million different ways of accomplishing the same thing. That is especially true for markdown. Not only are there completely different standards for what markdown is even supposed to do. There are a ton of different libraries for parsing markdown into HTML. Then another ton of libraries for highlighting syntax in the HTML that the markdown spits out.

Syntax highlighting ended up being deceptively hard, but a lot of that was because of my lack of experience with CSS.

```css
* {
	font-family: Montserrat, sans-serif;
}
```

Not only is the font very cheesy, but this tiny bit of css caused me so many hours of grief when it came to syntax highlighting. I tried a dozen different markdown and highlighting libraries, but no matter what I did, the font would never be monospaced. Why it took me so long to realize that every single library can't possibly be wrong, well, let's not talk about that. Ultimately the solution ended up being pretty simple.

```css
pre, code, code * {
	font-family: Consolas;
}
```

The issue is that the syntax highlighter will put all kinds of tags inside any `<code>` tag, so just the `code` rule isn't enough. `code *` will override the previous `*` rule, such that everything inside uses Consolas, which is a monospaced font. I'm sure there are better ways of doing this, and the css masters are cringing at me right now. But this works. And after hours of struggling, realizing this one simple fix was so incredibly satisfying.

I ended up going with `react-markdown` for the markdown and `react-syntax-highlighter` for the syntax highlighting. I guess the names are pretty self-explanatory. For completeness sake, here's what my markdown component looks like right now:

```jsx
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Markdown({ children }) {
	return (
		<ReactMarkdown
			components={{
				pre: ({ children }) => {
					return children;
				},
				code: ({ className, children }) => {
					if (className) {
						const language = className.replace("language-", "");
						const code = children[0].slice(0, -1);
						return (
							<SyntaxHighlighter
								style={style}
								language={language}
							>
								{code}
							</SyntaxHighlighter>
						)
					} else {
						return <code className="code-inline">{children}</code>
					}
				},
			}}
		>
			{children}
		</ReactMarkdown>
	)
}
```

## Closing thoughts

So far this has been a very interesting project. After countless hours of work I have achieved what you can achieve in 5 minutes with a CMS. I definitely don't regret it, though. I've learned a lot, and there's a nice sense of freedom by not committing too hard to any one tool. I guess I am pretty bound by React at this point though, but as far as committments go, that's not a bad one.

## Thank you!

Thank you for reading.

But more importantly, thank you to everyone who helped me in this process, whether you realize it or not. The internet truly is an amazing place. If I have a problem, I can just google it and instantly find people sharing their issues and solutions online. From the bottom of my heart, thank you to everyone who helps by contributing your knowledge online!

Here are some resources that really helped me:

[Youtube - The Digital Life - Reverse proxy nginx letsencrypt tutorial](https://www.youtube.com/watch?v=DyXl4c2XN-o)

[Youtube Playlist - The Net Ninja - Full React Tutorial #1 - Introduction](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

[Youtube Playlist - The Net Ninja - Next.js Tutorial #1 - Introduction & Setup](https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw)

[Youtube - Traversy Media - Static Blog With Next.js and Markdown](https://www.youtube.com/watch?v=MrjeefD8sac)

[Github - SyntaxError: Unexpected token export when using NextJS](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353)

As well as probably a hundred different posts online about various issues that I've looked up throughout the project. Thank you, everyone!
