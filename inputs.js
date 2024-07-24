/* 
Step 7: Connecting EmailOctopus and Calendly to your website
- Add your EmailOctopus and Calendly links between the quotation marks '' below
*/
const emailOctopusScript = '<script async src="https://eocampaign1.com/form/af56e2fe-49c4-11ef-8b09-3f1904e53fd6.js" data-form="af56e2fe-49c4-11ef-8b09-3f1904e53fd6"></script>'
const calendlyLink = 'https://calendly.com/bettyhudl'

/*
Step 8: Adding your logo
*/
const logoFileName = 'logo.png'

/*
Step 9: Website Content and Branding
- Here we will outline how we want the website to look like
- To do this we will be using HEX codes which we discussed in Step 4  
- Below you can see the HEX codes for the colors white and black

White HEX color code: #FFFFFF
Black HEX color code: #000000
*/

// HIGH PRIORITY CHANGES
// 2. Change project name and colours:
const companyName = 'THE OFFICIAL LUCA FAN CLUB'
const companyNameColor = '#7AC32F'

const buttonBackgroundColor = '7AC32F'
const buttonTextColor = '#FFFFFF' // Make this either black (#000000) or white (#FFFFFF) depending on what is easiest to read on your button color of choice

// 3. Update social media links:
const facebookLink = 'https://facebook.com'
const instagramLink = 'https://instagram.com'
const xLink = 'https://x.com/lucaducca'
const linkedinLink = 'https://linkedin.com'
const youtubeLink = 'https://youtube.com'
const tiktokLink = 'https://tiktok.com'
const discordLink = 'https://discord.com'

// 4. Update header and description texts:
const headerText = 'The number 1 place to dote on Luca.' // One-line description of what you will offer customers
const descriptionText = 'Tell him he's awesome, tell him you love him.' // More detailed description of what you will offer customers

// 5. Update contact email:
const contactEmail = 'bettypearl99@gmail.com'

// LOW PRIORITY CHANGES
// Branding: Update with different background and text colors if needed
const pageBackgroundColor = '#FFFFFF'
const pageTextColor = '#000000'

// Social media: Update the call to action with your own
const socialMediaCallToAction = 'Find us on social media'

// Waitlist: Update the call to action with your own
const waitlistCallToAction = 'Join the fanmail response list'

// Calendly: Update the calls to action with your own
const meetingCallToAction = 'Meet Luca's GF'
const meetingButtonText = 'Schedule a meeting'




// LOWEST PRIORITY CHANGES (For special cases)
// Forms: Change from white if it does not fit with your new background color
const formWrapperColor = '#FFFFFF'

// Social media: Change the colors if they do not fit with your new background color
const facebookLogoColor = '#4267B2'
const instagramLogoColor = '#E1306C'
const xLogoColor = '#000000'
const linkedinLogoColor = '#0077b5'
const youtubeLogoColor = '#FF0000'
const tiktokLogoColor = '#000000'
const discordLogoColor = '#5865F2'
























// Ignore the below code. It allows us to use the variables you have defined.
function splitScript(script) {
    const srcMatch = script.match(/src="([^"]+)"/);
    const dataFormMatch = script.match(/data-form="([^"]+)"/);

    const waitlistFormScriptSrc = srcMatch ? srcMatch[1] : null;
    const waitlistFormScriptDataForm = dataFormMatch ? dataFormMatch[1] : null;

    return {
        waitlistFormScriptSrc,
        waitlistFormScriptDataForm
    };
}

const { waitlistFormScriptSrc, waitlistFormScriptDataForm } = splitScript(emailOctopusScript);
