import { Suspense } from "react";
import Posts from "./components/posts";

// As this is a server component, so it can be made async. It renders only on server side
export default async function BlogPage() {
    /*const posts = [
        {
            id: 1,
            title: "Post 1",
            body: "Post 1 Body"
        },
        {
            id: 2,
            title: "Post 2",
            body: "Post 2 Body"
        },
        {
            id: 3,
            title: "Post 3",
            body: "Post 3 Body"
        },
        {
            id: 4,
            title: "Post 4",
            body: "Post 4 Body"
        },
        {
            id: 5,
            title: "Post 5",
            body: "Post 5 Body"
        },
    ];*/

    // If we want caching data from 3rd party api so that refreshed data will not come, we can use { cache: 'no-store' }

    // const apiData = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" });
    // const posts = await apiData.json();


    /* Use promise based api call  */

    const promisifiedPost = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());


    /* Reasoning of using .then() instead of async/await */

    /*
Short answer first 👇

> **Yes, the data is STILL coming from the 3rd-party API and React DOES wait for it — but it waits *without blocking the whole page*.**

Now let’s unpack that, slowly.

---

## The core misunderstanding

You’re thinking:

> “If data is slow and comes from a 3rd-party API, how is `fetch().then()` not waiting?”

The key is:

> **Waiting ≠ Blocking**

---

## Two kinds of “waiting”

### 1️⃣ Blocking wait (bad for streaming)

```js
const data = await fetch(...)
```

Here:

* Server **stops rendering**
* Nothing is sent to browser
* Whole page waits

This is a **blocking wait**

---

### 2️⃣ Non-blocking wait (good for streaming)

```js
const promise = fetch(...).then(...)
```

Here:

* Server **starts the request**
* Rendering continues
* React keeps a reference to the Promise
* UI can stream

This is a **non-blocking wait**

---

## Very important analogy (layman friendly)

### Imagine ordering food 🍕

#### `await fetch()`

🧍 You stand at the counter
❌ You don’t sit
❌ You don’t get water
❌ You wait until pizza is ready

---

#### `fetch().then()`

🧍 You place order
✅ You sit at table
✅ You get snacks
✅ Pizza comes later

👉 Pizza still takes same time
👉 But **you’re not frozen while waiting**

---

## What React + Suspense does internally

When React sees this:

```js
<Posts posts={postsPromise} />
```

and inside `Posts`:

```js
const posts = use(postsPromise);
```

React does:

1. “Oh, this is a Promise”
2. “I’ll pause ONLY this component”
3. “Render fallback instead”
4. “Resume when promise resolves”

🔥 That’s the magic.

---

## Timeline comparison (super important)

### ❌ Blocking (`await fetch`)

```
Request starts
⏳ wait
⏳ wait
⏳ wait
HTML sent
```

---

### ✅ Streaming (`fetch().then()` + use())

```
Request starts
HTML sent immediately
Fallback shown
⏳ data loads
Component renders
```

👉 Data time is same
👉 UX is **very different**

---

## Answering your exact line

> “But data is still coming from 3rd party API right?”

✅ **YES**
❌ But React is no longer *blocked* by it

---

## Why this matters in real apps

### Dashboard example

Without streaming:

* Blank screen for 2–3 seconds

With streaming:

* Layout + header visible instantly
* Skeletons shown
* Data appears progressively

Users *feel* it’s faster, even if backend speed is same.

---

## Important correction (small but crucial)

> `fetch().then()` does NOT make API faster
> It makes **rendering smarter**

---

## One-sentence truth to remember

> **Streaming doesn’t reduce waiting time — it hides waiting time with useful UI.**

---

## Final verdict (your understanding)

You were right to question this.
The missing idea was **blocking vs non-blocking render**, not data speed.

You’re now thinking at **React Server Components level**, not just “fetch data” level 👌

If you want, next I can:

* show network waterfall comparison
* explain how Next.js streams HTML chunks
* show when streaming is actually useless

Just say 👍

    
    */

    return (
        <div>
            <h3 className="text-5xl text-center m-10">Blog Posts</h3>
            <Suspense fallback={<div>Loading Posts...</div>}>
                <Posts posts={promisifiedPost} />
            </Suspense>
        </div>
    );
}