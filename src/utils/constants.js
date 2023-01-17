export const APP_LINKS = [
  {
    key: 1,
    label: 'brainstorm',
  },
  {
    key: 2,
    label: 'campaigns',
  },
  {
    key: 3,
    label: 'profile',
  },
]

export const BRAINSTORM_PROMPTS = [
  {
    type: 'prompt',
    label: 'okay, write me 10 tweets for my brand',
  },
  {
    type: 'prompt',
    label: 'give me 10 tips to promote my brand',
  },
  {
    type: 'prompt',
    label: 'tell me a fun fact',
  },
]

export const CREATION_TIPS_GUIDES = [
  {
    type: 'guide',
    field: 'platform',
    desc: <>How many posts do you need per platform?</>,
  },
  {
    type: 'guide',
    field: 'tone',
    desc: (
      <>
        how to you want your content to sound?
        <br />
        select up to 3 tones
      </>
    ),
  },
  {
    type: 'tip',
    field: 'check',
    desc: (
      <>
        including images increases the chances of users interacting.
        <br />
        <br />
        including hashtags increases the reach of your content
      </>
    ),
  },
  {
    type: 'guide',
    field: 'goal',
    desc: (
      <>what outcome do you expect? brand awareness? new users? retention? </>
    ),
  },
  {
    type: 'tip',
    field: 'description',
    desc: (
      <>
        what is this campaign for? give some context for the best results
        <br />
        <br />
        <label
          style={{
            fontFamily: 'MontserratRegular',
            fontSize: '14px',
            lineHeight: 'auto',
            color: 'var(--secondary)',
          }}
        >
          example
        </label>
        <br />
        our marketing campaign will focus on the natural ingredients and its
        superior quality, emphasizing the brand's commitment to provide only the
        best organic and natural ingredients. We'll use targeted digital and
        social media advertising to reach a wide audience and engage with
        consumers. We'll also create informative blog posts and videos
        showcasing the product's benefits and demonstrate how to use it
        effectively. Finally, we'll use influencer marketing to create positive
        word of mouth and drive positive brand awareness.
      </>
    ),
  },
  {
    type: 'tip',
    field: 'benefits',
    desc: (
      <>
        including benefits increases the likelihood of someone trying your
        product
        <br />
        <br />
        <label
          style={{
            fontFamily: 'MontserratRegular',
            fontSize: '14px',
            lineHeight: 'auto',
            color: 'var(--secondary)',
          }}
        >
          example
        </label>
        <br />
        long-lasting hydration, Rejuvenated skin, eco-friendly, etc.
      </>
    ),
  },
  {
    type: 'tip',
    field: 'product-desc',
    desc: (
      <>
        describe your product- be as specific as possible
        <br />
        <br />
        <label
          style={{
            fontFamily: 'MontserratRegular',
            fontSize: '14px',
            lineHeight: 'auto',
            color: 'var(--secondary)',
          }}
        >
          example
        </label>
        <br />
        we are an organic skincare brand. our formulas are made with organic
        plant-based oils, organic shea and cocoa butters, organic essential
        oils, and natural botanical extracts that work together to nourish and
        protect your skin from the elements. our products are free from toxins
        and harsh chemicals, so you can trust that you're using something that's
        healthy and safe for your skin.
      </>
    ),
  },
  {
    type: 'guide',
    field: 'info',
    desc: (
      <>
        this could include things like links, contact info, location, date/time,
        etc.{' '}
      </>
    ),
  },
]
