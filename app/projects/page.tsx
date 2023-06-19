import Project from "@/components/Project"
export default function Projects() {
    
    return (
        <div className="pb-10">
            <Project projectUrl="https://github.com/BradGulli/AlexaChannelMoverDiscordBot" projectTitle="Alexa Discord Channel Mover">
                This project orignally began as a joke Discord bot to be used by my friends. It was called &quot;Johnny Jail Bot&quot;
                and it&apos;s only purpose was to move our friend Johnny into a Discord channel called &quot;Johnny Jail&quot;.
                However, if I needed to tab back into Discord and run a command, that sort of defeted the purpose of having the bot right? So, I wanted
                to be able to trigger the bot with a voice command. Using the Alexa Skills Kit, I was able to hook up the Discord bot with a custom Alexa Skill. 
                This allowed me to tell Alexa to move Johnny to &quot;Johnny Jail&quot;, and Johnny would be moved. After building this, I decided I could expand it 
                be able to move any use into any channel. I was able to achieve this by using the concept of &quot;Intent Slots&quot; in Alexa skills which basically
                allow you to pull variables out of an utterance. Now, people in Discord tend to have non-traditional names for both their usernames and names of 
                voice channels. Alexa is not likely to understand these names correctly when speaking. So I made use of a fuzzy matching library, <a href="https://fusejs.io/" target="_blank" className="text-blue-400">fuze.js</a>,
                to match what Alexa heard to the actual usernames and channel names. This works quite well and I am able to move users between channels with voice. I also am able to bulk move all users from 
                one channel to another. Of course, there is also still a joke feature which allows me to send users to the  &quot;Shadow Realm&quot;.
            </Project>
            <Project projectUrl="https://github.com/BradGulli/PortfolioWebsite" projectTitle="Portfolio Website">
                The website you are looking at right now! This website serves as my porfolio, so I can share my work and the work
                I am passionate about. I built this website using Next.js and Tailwind CSS, and deployed on Vercel. This website also features an AI assistant
                powered by OpenAI&apos;s GPT 3.5, which can answer questions about by resume. Try it out on the <a href="/resume" className="text-blue-400">Resume</a> page.
            </Project>
        </div>
        
    )
}