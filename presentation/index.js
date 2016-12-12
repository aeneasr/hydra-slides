// Import React
import React from 'react'
import { Appear, Deck, Heading, ListItem, List, Slide, Spectacle, BlockQuote, Quote } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

// Import Spectacle Core tags

// Import image preloader util

// Import theme

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//
const images = {
  serlo: require('../assets/serlo.png'),
  example: [
    require("../assets/circleci.png"),
    require("../assets/circleci-2.png"),
    require("../assets/circleci-3.png"),
    require("../assets/circleci-4.png"),
    require("../assets/circleci-5.png"),
    require("../assets/circleci-6.png"),
    require("../assets/circleci-7.png"),
    require("../assets/circleci-8.png")
  ],
  circle: require("../assets/circle-ci.gif"),
  dropbox: require("../assets/dropbox.gif"),
  quickstart: require("../assets/quickstart.png"),
  siege: require("../assets/siege.png"),
  editor: require("../assets/ory-editor.png"),
  client: [
    require("../assets/create-client.png"),
    require("../assets/create-client-2.png")
  ],
  substitution: [
    require("../assets/token-substitution-1.png"),
    require("../assets/token-substitution-2.png"),
    require("../assets/token-substitution-3.png")
  ]
};
//
preloader(images);

const theme = createTheme({
  primary: 'black',
  secondary: "#ff4081",
  important: '#FFC43D'
});

let last = 0
const next = (len = 1, off = 0) => {
  const ret = [last + off, last + len + off]
  last = last + len + off
  return ret
}
const start = (len = 1) => {
  last = len
  return [0, len]
}
const same = (len = 1, offset = 1) => [last - offset, last + len - offset]

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} bgColor="black">
        <Deck transition={["zoom", "slide"]} progress="bar" transitionDuration={500} bgColor="black">
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Hydra
            </Heading>
            <Appear>
              <Heading size={4} caps fit textColor="white">
                OAuth 2.0 Authorization Framework
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Authentication
            </Heading>
            <Appear><Heading size={4} textColor="white">Act of confirming an identity</Heading></Appear>
            <Appear><Heading size={4} textColor="white">Passport control at the airport</Heading></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Authorization
            </Heading>
            <Appear><Heading size={4} textColor="white">Act of controlling access</Heading></Appear>
            <Appear><Heading size={4} textColor="white">Paying $4,99 for a coffee</Heading></Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Delegation of Authorization
            </Heading>
            <Appear>
              <Heading size={6} textColor="white">Me trusting you with $4,99 to bring me a
                coffee</Heading>
            </Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Common HTTP auth
            </Heading>
            <Appear>
              <div>
                <Heading size={6} caps textColor="secondary">Cookie auth</Heading>
                <Heading size={6} caps textColor="secondary">Basic auth</Heading>
                <Heading size={6} caps textColor="secondary">Bearer auth</Heading>
                <Heading size={6} caps textColor="secondary">JSON Web Token</Heading>
              </div>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/usual-auth")}
            ranges={[
              { loc: same(9), title: 'cookie auth' },
              { loc: next(4), note: 'Client transmits credentials' },
              { loc: next(3, 1), note: 'Server responds with cookie' },
              { loc: next(3, 1), note: 'User agent accesses protected page with cookie' },
              { loc: same(3, -4), title: 'basic auth' },
              { loc: next(1, 5), note: 'base64(ken:secret)' },
              { loc: next(4, 5), title: 'bearer auth' },
              { loc: next(5, 1), note: 'JSON response with a session identifier (token)' },
              { loc: next(3, 2), note: 'Pass token along as bearer RFC 6750 (OAuth 2.0 related)' },
              { loc: next(3, 4), title: 'JSON Web Token (JWT)' },
              {
                loc: same(1, 3), note: `header: {
  "alg": "HS256",
  "typ": "JWT"
}`
              },
              {
                loc: same(1, 2), note: `payload: {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}`
              },
              { loc: same(1, 1), note: `HMAC SHA (header, payload) with password 'secret'` },
            ]}/>

          <Slide transition={[]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              OAUTH 2.0 EXAMPLE
            </Heading>
            <Appear><Heading size={6} textColor="secondary">
              A hosted Jenkins that works with GitHub.
            </Heading></Appear>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[0]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.client[0]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="white">
              Scenario: Circle CI wants to access a user's data<br />
              on GitHub. Circle CI is not affiliated with GitHub.
            </Heading>
            <Appear><Heading size={6} textColor="secondary">
              First step: Create an OAuth2 Client
            </Heading></Appear>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.client[0]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.client[1]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[1]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[1]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="white">
              Circle CI redirects the user agent (chrome) to GitHub,<br />
              when pressing sign in.
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[2]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="white">
              GitHub asks the user to authenticate (cookie auth).
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[2]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/auth-url")}
            ranges={[
              { loc: start(1), title: 'OAuth 2.0 Authorize Code Flow' },
              { loc: next(1), note: 'Client id for Circle CI from developer account' },
              { loc: next(1), note: 'Where to redirect after success / failure' },
              { loc: next(1), note: 'Request access to the user\'s email and all of his repositories' },
              { loc: next(1), note: 'Anti-CSRF & -replay token' },
              { loc: next(3, 5), note: 'User is not logged in, redirect' },
            ]}/>

          <Slide transition={["fade"]} bgImage={images.example[4]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="white">
              GitHub asks the user if it is ok to give<br/>
              Circle CI access to his data (email, repositories).
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[4]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[5]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[6]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/callback-url")}
            ranges={[
              { loc: start(0), title: 'OAuth 2.0 Token Exchange' },
              { loc: next(1), note: 'Redirect URL provided earlier' },
              { loc: next(1), note: 'OAuth2 Authorize Code' },
              { loc: next(1), note: 'Anti-CSRF token from earlier' },
              { loc: next(1, 2), title: 'exchange code for tokens' },
              { loc: same(1), note: 'https://github.com/oauth/token' },
              { loc: next(1, 1), note: 'Circle CI client id' },
              { loc: next(1), note: 'Circle CI client secret' },
              { loc: next(1), note: 'Could also be refresh_token, client_credentials, ...' },
              { loc: next(1), note: 'Authorization code from above' },
//              { loc: next(1), note: 'OAuth2 Token endpoint' },
              { loc: next(4, 2), title: 'OAuth 2.0 Token Reply' },
              { loc: next(2, 2), note: 'Short lifetime token (here: one hour)' },
              { loc: next(1), note: 'One time password for refreshing the access token' },
              { loc: next(4, 2), title: 'Authorized request' },
              { loc: next(1), note: 'Fetch the user\'s repositories' },
              { loc: next(3, 5), note: 'This presentation!' },
            ]}/>

          <Slide transition={["fade"]} bgImage={images.example[5]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <List>
              <ListItem textColor="white">
                A developer account was created, the <strong>OAuth2 client</strong>.
              </ListItem>
              <Appear>
                <ListItem textColor="white">
                  To get access to user data, Circle CI redirects the user to the <strong>OAuth2 authorize endpoint</strong>,
                  and specifies what access privileges are required.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  GitHub authenticates the user (<strong>not OAuth2</strong>) if required.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  GitHub asks the user for his <strong>consent</strong> to grant Circle CI<br/>
                  certain privileges.
                </ListItem>
              </Appear>
              <Appear>
              <ListItem textColor="white">
                GitHub redirects the user agent back to Circle CI,<br />
                passing along an <strong>authorization code</strong>.
              </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Circle CI exchanges the authorization code for an <strong>access token</strong> at the <strong>OAuth2 token endpoint</strong>.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Circle CI uses the access token to make authorized API calls <strong>on behalf of the user</strong>.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[5]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <BlockQuote textColor="white">
              The OAuth 2.0 authorization framework enables a third-party
              application to obtain limited access to an HTTP service, either on
              behalf of a resource owner by orchestrating an approval interaction
              between the resource owner and the HTTP service, or by allowing the
              third-party application to obtain access on its own behalf.<br /><br />
              <em>IETF RFC 6749: The OAuth 2.0 Authorization Framework</em>
            </BlockQuote>
          </Slide>


          <Slide transition={["fade"]} bgImage={images.example[7]}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="white">
              Revoke application access and <br/>
              invalidate all issued tokens.
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.example[7]}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={2} fit lineHeight={1} textColor="white">
              Criticism
            </Heading>
            <Appear>
              <Heading size={5} caps textColor="secondary">
                Relying only on HTTP over TLS ("HTTPS") for security
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} caps textColor="secondary">
                OAuth 2.0 is not for authentication
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} caps textColor="secondary">
                Inconsistent implementations
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} caps textColor="secondary">
                OAuth2 provider difficult to implement
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={2} fit lineHeight={1} textColor="white">
              Solutions
            </Heading>
            <Appear>
              <Heading size={6} textColor="secondary">
                HTTP/2 and projects like Let's Encrypt
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} textColor="secondary">
                OpenID Connect 1.0
              </Heading>
            </Appear>
            <Appear>
              <Heading size={4} caps textColor="secondary">
                Hydra
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Live Demo
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="black">
            <Heading size={2} fit lineHeight={1} textColor="white">
              Consent flow
            </Heading>
            <Appear>
              <Heading size={6} textColor="secondary">
                The consent flow decouples authorization and authentication.
              </Heading>
            </Appear>
            <Appear>
              <Heading size={6} textColor="white">
                Hydra uses cryptographically signed tokens to exchange information between the authentication provider and itself.
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/consent-url")}
            ranges={[
              { loc: start(0), title: 'Consent Flow' },
              { loc: next(1), note: 'OAuth2 authorize endpoint (Hydra is running on port 4444)' },
              { loc: next(1), note: 'OAuth2 Client ID' },
              { loc: next(1), note: 'The CLI set up a http server at port 4445 for the callback'  },
              { loc: next(1) },
              { loc: next(1) },
              { loc: next(1) },
              { loc: next(1, 3), note: <span>Hydra redirects to the <em>consent app</em>, appending a JWT: the <em>consent challenge</em></span> },
              { loc: next(4, 1), note: 'Consent challenge JWT header' },
              { loc: next(1), note: 'Consent challenge JWT payload' },
              { loc: next(1), note: 'Audience (e.g. Circle CI)' },
              { loc: next(1,1), note: 'Anti-Replay & -CSRF token' },
              { loc: next(1), note: 'Where to redirect after authentication (OAuth2 authorize url from line 1)' },
              { loc: next(5), note: 'What access rights (scopes) have been requested' },
              { loc: next(1, 3), note: 'After the user authenticated and gave his consent to allow the app to act on his behalf, he is redirected back to the Hydra' },
              { loc: next(6), note: <span>Same values as before, taken from the <code>redir</code> value</span> },
              { loc: next(1), note: 'Also, the consent response was added. It is also a signed JWT. Keys can be provided by hydra!' },
              { loc: next(1, 2), note: 'The OAuth2 client who initiated the request (in this case, admin)' },
              { loc: next(1), note: 'The OAuth2 client who initiated the request (in this case, admin)' },
              { loc: next(1), note: 'Anti-Replay & -CSRF token echo' },
              { loc: next(4), note: 'List of scopes the user agreed to (note: openid missing)' },
              { loc: next(1), note: `The user's id (abritrary)` },
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Motivation
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <List>
              <ListItem textColor="white">
                Existing solutions have hard dependencies such as .NET, node, Java, ...<br />
              </ListItem>
              <Appear>
                <ListItem textColor="secondary">
                  Hydra cross-compiles (win, osx, linux, freebsd) to a single binary with no dependencies and is
                  memory-safe and statically typed.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Existing OAuth 2.0 implementations usually solve authorization <em>and authentication</em>.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="secondary">
                  Hydra uses the <strong>consent flow</strong> to authenticate users through a third party.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <List>
              <ListItem textColor="white">
                Existing solutions require complex configuration management, from modifying html templates to writing
                custom plugins.
              </ListItem>
              <Appear>
                <ListItem textColor="secondary">
                  The consent flow separates concerns and <em>outsources</em> backend connectors (mysql, ldap, mongodb,
                  ...), templates, two-factor authentication, ...
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Integrating available implementations in existing environments is difficult, because authentication is
                  not separated.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="secondary">
                  Hydra integrates well with existing environments, but has higher complexity in greenfield projets.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Highlights
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              OPEN SOURCE
            </Heading>
            <Heading size={2} caps textColor="white">
              APACHE 2.0 LICENSE
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              OAUTH2 SECURITY OUTLINES
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="white">
                  Only token signatures are stored in the database
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  BCrypt is used for OAuth 2.0 client secret hashing
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  RSA is used to sign cryptographic tokens
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/policy")}
            ranges={[
              { loc: start(0), title: 'ACCESS CONTROL POLICIES' },
              { loc: next(2, 3), note: 'The warden endpoint is able to tell if a person is allowed to do something or not, based on policies that are stored in Hydra\'s database.' },
              { loc: next(1, 1), note: 'Who is making the request?' },
              { loc: next(1), note: 'What is the person trying to do?' },
              { loc: next(1), note: 'Who is impacted by the action?' },
              { loc: next(3), note: 'Information on the environment' },
              { loc: next(4, 5), note: 'To whom does the policy apply?' },
              { loc: same(1, 3), note: 'Arbitrary names' },
              { loc: same(1, 2), note: 'Supports regex encapsulated in `<` `>`' },
              { loc: next(1), note: 'Can be allow or deny' },
              { loc: next(3), note: 'A list of resources the policy applies to' },
              { loc: next(4), note: 'What interactions the policy applies to' },
              { loc: next(8, 0), note: 'Conditions' },
              { loc: same(6, 7), note: 'Policy applies only if ip ranges matches' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              JSON Web Key Management
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="white">
                  General purpose format for encryption and signing keys.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Keys are encrypted with AES-256-GCM before storage in database.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  AES-GCM provides both confidentiality and data origin authentication.
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Reception
            </Heading>
            <List>
              <Appear>
                <div>
                  <ListItem textColor="white">
                    Prominent topic on hacker news and network security communities
                  </ListItem>
                  <ListItem textColor="white">
                    2200+ GitHub stars
                  </ListItem>
                  <ListItem textColor="white">
                    9600+ Docker Image Downloads
                  </ListItem>
                  <ListItem textColor="white">
                    ~1000 unique visitors per month on GitHub
                  </ListItem>
                  <ListItem textColor="white">
                    Active chat community with daily activity
                  </ListItem>
                  <ListItem textColor="white">
                    Multiple company adopters
                  </ListItem>
                  <ListItem textColor="white">
                    24 contributors
                  </ListItem>
                </div>
              </Appear>
            </List>
          </Slide>


          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              What the community is saying
            </Heading>
            <List>
              <Appear>
                <div>
                  <BlockQuote textColor="white">
                    "Nice! Lowering barriers to the use of technologies like these is important."<br />
                    <em>Pyxl101</em>
                  </BlockQuote>
                  <BlockQuote textColor="white">
                    "OAuth is a framework not a protocol. The security it provides can vary greatly between implementations. Fosite (which is what this is based on) is a very good implementation from a security perspective"<br />
                    <em>abritishguy</em>
                  </BlockQuote>
                  <BlockQuote textColor="white">
                    "Thanks for releasing this by the way, looks really well engineered."<br/>
                    <em>olalonde</em>
                  </BlockQuote>
                </div>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              Use Cases
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.serlo}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} textColor="secondary">
              serlo.org
            </Heading>
            <Appear>
              <BlockQuote textColor="white">
                Unsere Vision ist freie Bildung, die von einer offenen und unabhängigen Gemeinschaft gestaltet wird.
                Durch breite Beteiligung entstehen verständliche und fundierte Lernmaterialien, die allen gleichermaßen
                kostenlos zugänglich sind.
                Freie Bildung ist somit Bestandteil einer vielfältigen und vernetzten Gesellschaft mit starkem
                Gemeinsinn und selbstbestimmten Menschen, die Freude am Lernen haben.
              </BlockQuote>
            </Appear>
            <List>
              <Appear>
                <ListItem textColor="white">
                  Like Wikipedia, but optimized for educational content.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="secondary">
                  Non-profit organization founded by Simon Köhl and me
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  50 active volunteers, 600.000+ unique visitors per month, growth accelerating, currently ~20.000 per
                  month
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.serlo}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["fade"]} bgImage={images.serlo}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} textColor="secondary">
              CHALLENGES
            </Heading>
            <List>
              <Appear>
                <ListItem textColor="white">
                  Scaling issues with increasing traffic
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="secondary">
                  Split up application into micro services and use Hydra for centralised access control.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Provide better learning tools, progress management, recommendations, ...
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="secondary">
                  Allow integration of third party tools, expose APIs via OAuth2
                </ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">
                  Improve author experience
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.editor}
                 bgSize="contain"
                 bgRepeat="no-repeat" bgDarken={0.85}>
            <Heading size={1} fit textColor="secondary">
              BETTER AUTHOR EXPERIENCE:
            </Heading>
            <Appear>
              <Heading size={1} caps fit textColor="white">
                The ORY Editor
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.editor}
                 bgSize="contain"
                 bgRepeat="no-repeat">
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} caps fit textColor="secondary">
              THANK YOU
            </Heading>
          </Slide>


          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*OpenID Connect: The ID Token*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*JSON Web Tokens?*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} textColor="white">*/}
          {/*jwt.io*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Features*/}
          {/*</Heading>*/}
          {/*<List>*/}
          {/*<Appear><ListItem>Delegate Authentication!</ListItem></Appear>*/}
          {/*<Appear><ListItem>Flows for services, web apps and mobile apps.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Various interactions: Force password confirm, force 2FA, ...</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*OIDC neutralizes a Common Pitfall*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*Using OAuth2 for Authentication*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Scenario: You run a financial app*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*you allow people to sign in via google*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide bgImage={images.substitution[0]} transition={["fade"]}/>*/}
          {/*<Slide bgImage={images.substitution[1]} transition={["fade"]}/>*/}
          {/*<Slide bgImage={images.substitution[2]} transition={["fade"]}/>*/}


          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*NOTES*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Appear fid="1"><Text textColor="white">I was able to decide which repositories Circle CI will have access*/}
          {/*to.</Text></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Appear fid="1"><Text textColor="white">Do not confuse OAuth2 with an authentication method, although it*/}
          {/*looked like one.</Text></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Appear fid="1"><Text textColor="white">Using OAuth2 for authentication through a third party requires*/}
          {/*in-depth knowledge of OAuth2.</Text></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Authentication*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={4} textColor="white">Passport control, validating your identity</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="important">NOT OAuth2!</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Authorization*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={4} textColor="white">Is Peter allowed to use the printer?</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="important">NOT OAuth2...?</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Delegation of Authorization*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={6} textColor="white">Paying with a stranger's money at a point of*/}
          {/*<Appear><Heading size={6} textColor="white">Paying with a stranger's money at a point of*/}
          {/*sale</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="important">OAuth2!</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Delegation of Authentication*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={6} textColor="white">Giving your passport to your twin-brother</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="important">OpenID Connect!</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["fade"]} bgColor="black" textColor="secondary">*/}
          {/*<List>*/}
          {/*<Appear><ListItem>OAuth2 does not replace authentication nor authorization in your current*/}
          {/*environment.</ListItem></Appear>*/}
          {/*<Appear><ListItem>OAuth2 is a framework of work flows and extends your current*/}
          {/*environment's interoperability.</ListItem></Appear>*/}
          {/*<Appear><ListItem>OAuth2 makes sense when opening up APIs, otherwise it doesn't.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Due to it's nature (using opaque short living credentials), OAuth2 introduces a secure*/}
          {/*flow for mobile clients.</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Why is OAuth2 so popular?*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Peer reviewed standard by the IETF*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={6} textColor="white">*/}
          {/*Sepcified by Google, Microsoft, Deutsche Telekom, ...*/}
          {/*</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="important">*/}
          {/*Ease of use, but secure!*/}
          {/*</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={[]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Flows for every use case*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={2} textColor="white">*/}
          {/*Client credentials*/}
          {/*</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="white">*/}
          {/*Authorize code*/}
          {/*</Heading></Appear>*/}
          {/*<Appear><Heading size={2} textColor="white">*/}
          {/*Implicit flow*/}
          {/*</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<CodeSlide*/}
          {/*transition={[]}*/}
          {/*lang="js"*/}
          {/*code={require("raw!../assets/passport")}*/}
          {/*ranges={[*/}
          {/*{ loc: [0, 6], title: 'Ease of use' },*/}
          {/*{ loc: [7, 8] }*/}
          {/*]}/>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Let's get hacking...*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["fade"]} bgColor="black" textColor="white">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*... with ... Hydra?*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={6} textColor="white">Run your own OAuth2 infrastructure in minutes</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<List>*/}
          {/*<Appear><ListItem>Scalable, low-latency, in memory Access Control, OAuth2, and OpenID Connect*/}
          {/*layer.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Secure by design: Encrypt at rest and in transport.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Mitigate database penetration and leakage.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Runs on top of existing authentication and authorization.</ListItem></Appear>*/}
          {/*<Appear><ListItem>1700 stars, trending multiple times on hackernews, reddit, GitHub,*/}
          {/*...</ListItem></Appear>*/}
          {/*<Appear><ListItem>Open Source, written in Google Go and supported by the Ludwig-Maximilians-Universität*/}
          {/*München (placed 29th world-wide).</ListItem></Appear>*/}
          {/*<Appear><ListItem>Fast growing ecosystem and community.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Written and designed by me - now a part of cloud native company Ory*/}
          {/*GmbH.</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*It's really fast*/}
          {/*</Heading>*/}
          {/*<Appear><Heading size={6} textColor="white">single instance on 2013 macbook, token*/}
          {/*validation</Heading></Appear>*/}
          {/*<Appear><Heading size={6} textColor="white">~600 requests / sec</Heading></Appear>*/}
          {/*<Appear><Heading size={6} textColor="white">Siege: 60% CPU time - Hydra: 30% CPU time</Heading></Appear>*/}
          {/*<Appear><Heading size={6} textColor="white">Memory footprint: 12,3MB (~10000 active*/}
          {/*tokens)</Heading></Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["fade"]}>*/}
          {/*<Image width="100%" src={images.siege}/>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Enough talking!*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["fade"]}>*/}
          {/*<Image width="100%" src={images.quickstart}/>*/}
          {/*</Slide>*/}

          {/*<CodeSlide*/}
          {/*transition={[]}*/}
          {/*lang="js"*/}
          {/*code={require("raw!../assets/install")}*/}
          {/*ranges={[*/}
          {/*{ loc: [0, 1], note: 'If you don\'t have git, download the zip package from github.com/ory-am/hydra' },*/}
          {/*{ loc: [2, 3] },*/}
          {/*{ loc: [4, 5], note: 'SYSTEM_SECRET: This is used to encrypt data at rest' },*/}
          {/*{ loc: [4, 5], note: 'DOCKER_IP: Only required when using docker inside a VM' },*/}
          {/*{ loc: [4, 5] },*/}
          {/*{ loc: [8, 9], note: 'Check if the name is correct' },*/}
          {/*{ loc: [11, 12], note: 'Hack: SSH into docker - saves you the trouble of installing the hydra CLI' },*/}
          {/*{ loc: [14, 15], note: 'OAuth2 Client Credentials Flow' },*/}
          {/*{ loc: [16, 17], note: 'OAuth2 Access Token!' },*/}
          {/*{ loc: [18, 19], note: 'hydra token validate --skip-tls-verify <token>' },*/}
          {/*{ loc: [21, 22] },*/}
          {/*{ loc: [22, 26] },*/}
          {/*{ loc: [26, 27] },*/}
          {/*{ loc: [27, 28] },*/}
          {/*{ loc: [28, 29] },*/}
          {/*{ loc: [29, 30] },*/}
          {/*{ loc: [30, 31] },*/}
          {/*{ loc: [18 + 15, 19 + 15] },*/}
          {/*{ loc: [19 + 15, 35 + 15] },*/}
          {/*{ loc: [28 + 15, 29 + 15] },*/}
          {/*{ loc: [29 + 15, 30 + 15] },*/}
          {/*{ loc: [30 + 15, 31 + 15] }*/}
          {/*]}/>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*This was: Client Credentials Flow*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Now: Authorize Code Flow*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Live Demo*/}
          {/*</Heading>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*OpenID Connect: The ID Token*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*JSON Web Tokens?*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} textColor="white">*/}
          {/*jwt.io*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Features*/}
          {/*</Heading>*/}
          {/*<List>*/}
          {/*<Appear><ListItem>Delegate Authentication!</ListItem></Appear>*/}
          {/*<Appear><ListItem>Flows for services, web apps and mobile apps.</ListItem></Appear>*/}
          {/*<Appear><ListItem>Various interactions: Force password confirm, force 2FA, ...</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*OIDC neutralizes a Common Pitfall*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*Using OAuth2 for Authentication*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Scenario: You run a financial app*/}
          {/*</Heading>*/}
          {/*<Appear>*/}
          {/*<Heading size={2} caps>*/}
          {/*you allow people to sign in via google*/}
          {/*</Heading>*/}
          {/*</Appear>*/}
          {/*</Slide>*/}

          {/*<Slide bgImage={images.substitution[0]} transition={["fade"]}/>*/}
          {/*<Slide bgImage={images.substitution[1]} transition={["fade"]}/>*/}
          {/*<Slide bgImage={images.substitution[2]} transition={["fade"]}/>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="white">*/}
          {/*Questions?*/}
          {/*</Heading>*/}
          {/*<List>*/}
          {/*<Appear><ListItem>Read Hydra Guide and API Docs</ListItem></Appear>*/}
          {/*<Appear><ListItem>Ask in Mailinglist</ListItem></Appear>*/}
          {/*<Appear><ListItem>Ask in Chat</ListItem></Appear>*/}
          {/*<Appear><ListItem>Create issue on GitHub</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

          {/*<Slide transition={["zoom"]} bgColor="black">*/}
          {/*<Heading size={1} caps fit textColor="secondary">*/}
          {/*Thank you for your time!*/}
          {/*</Heading>*/}
          {/*<List textColor="white">*/}
          {/*<Appear><ListItem>Twitter: @_aeneasr</ListItem></Appear>*/}
          {/*<Appear><ListItem>GitHub: @arekkas</ListItem></Appear>*/}
          {/*<Appear><ListItem>Web: aeneas.io</ListItem></Appear>*/}
          {/*</List>*/}
          {/*</Slide>*/}

        </Deck>
      </Spectacle>
    );
  }
}


//
// <Slide transition={["zoom"]} bgColor="primary">
//   <Heading size={1} fit caps lineHeight={1} textColor="black">
//     What is Redux and why?
//   </Heading>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={'(previousState, action) => newState'}
//   ranges={[
//     { loc: [0, 1] },
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     Say again...?
//   </Heading>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       Let's look at some bad practices first in ...
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       jQuery
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/jquery")}
//   ranges={[
//     { loc: [0, 7] },
//     { loc: [7, 10] },
//     { loc: [11, 16] }
//   ]}/>
//
// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//   <List>
//     <Appear><ListItem>DOM is not a good place to store state</ListItem></Appear>
//     <Appear><ListItem>There is no consistent view of the state</ListItem></Appear>
//     <Appear><ListItem>We don't really know what caused the current state</ListItem></Appear>
//     <Appear><ListItem>What happens in a large application with WebSockets, AJAX ...?</ListItem></Appear>
//     <Appear><ListItem>In a team, how do you keep track of everything and train people?</ListItem></Appear>
//   </List>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       Let's look at some bad practices first in ...
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       Angular
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/angular")}
//   ranges={[
//     { loc: [0, 7] },
//     { loc: [11, 15] }
//   ]}/>
//
// <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//   <List>
//     <Appear><ListItem>State is kept inside of a controller</ListItem></Appear>
//     <Appear><ListItem>In real life 10% is local scope, 90% is shared state</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using the rootScope</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using eventbus with side effects</ListItem></Appear>
//     <Appear><ListItem>Bad: Global state using global, services, you name it</ListItem></Appear>
//   </List>
// </Slide>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="primary">
//       The rescue
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       REDUX
//     </Heading>
//   </Appear>
// </Slide>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-1")}
//   ranges={[
//     { loc: [0, 7], note: 'A company has a global knowledge management, called the store' },
//     { loc: [9, 13], note: 'CEO decides new directive: everyone must wear appropriate clothes' },
//     { loc: [14, 15], note: 'CEO makes directive public' },
//     { loc: [16, 28], note: 'Departments decide what to do' },
//     { loc: [29, 37], note: 'CEO can always see what\'s happening' },
//     { loc: [38, 39], note: 'CEO resigns.' },
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     In real life...
//   </Heading>
// </Slide>
//
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-3")}
//   ranges={[
//     { loc: [0, 2] },
//     { loc: [2, 15], note: 'a list of all reducers' },
//     { loc: [4, 9], note: 'greeting reducer' },
//     { loc: [10, 15], note: 'some other reducer' },
//     { loc: [17, 21], note: 'state => react element props' },
//     { loc: [22, 27] }
//   ]}/>
//
// <CodeSlide
//   transition={[]}
//   lang="js"
//   code={require("raw!../assets/redux-2")}
//   ranges={[
//     { loc: [0, 2] },
//     { loc: [3, 8] },
//     { loc: [9, 13], note: 'this is an action creator' },
//     { loc: [14, 15], note: 'return the greeting state' },
//     { loc: [16, 19], note: 'state => react element props' },
//     { loc: [20, 23], note: 'action dispatchers => react element props' },
//     { loc: [24, 25], note: 'link mappers and react element' }
//   ]}/>
//
// <Slide transition={["zoom"]} bgColor="black">
//   <Heading size={1} fit caps lineHeight={1} textColor="white">
//     Get the skeleton!
//   </Heading>
//   <Appear fid="1">
//     <Heading size={1} caps fit textColor="tertiary">
//       github.com/serlo-org
//     </Heading>
//   </Appear>
//   <Appear fid="2">
//     <Heading size={1} caps fit textColor="tertiary">
//       hack-night-03-react
//     </Heading>
//   </Appear>
// </Slide>


//
//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>
//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>
//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})
//
// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>
//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>
//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>