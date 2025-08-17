<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">AMA-APP</h1></p>
<p align="center">
	<em><code>❯ Ask  Me Anything Applictaion (currently it only supports my email for replies)</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Subhams-GIT/Ama-App?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Subhams-GIT/Ama-App?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Subhams-GIT/Ama-App?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Subhams-GIT/Ama-App?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Project Structure

```sh
└── Ama-App/
    ├── README.md
    ├── components.json
    ├── emails
    │   ├── Reply.tsx
    │   └── VerificationEmail.tsx
    ├── eslint.config.mjs
    ├── messages.json
    ├── middleware.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── Helpers
    │   ├── app
    │   ├── components
    │   ├── context
    │   ├── lib
    │   ├── model
    │   ├── schemas
    │   └── types
    ├── tailwind.config.ts
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>AMA-APP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/package-lock.json'>package-lock.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/next.config.ts'>next.config.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/middleware.ts'>middleware.ts</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/messages.json'>messages.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/components.json'>components.json</a></b></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>types</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/types/next-auth.d.ts'>next-auth.d.ts</a></b></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/types/ApiResponse.ts'>ApiResponse.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>model</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/model/User.model.ts'>User.model.ts</a></b></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/lib/resend.ts'>resend.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/lib/DbConnect.ts'>DbConnect.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>schemas</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/schemas/acceptMessageSchema.ts'>acceptMessageSchema.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/schemas/messageSchema.ts'>messageSchema.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/schemas/signinSchema.ts'>signinSchema.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/schemas/signUpSchema.ts'>signUpSchema.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/schemas/verifySchema.ts'>verifySchema.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/NavBar.tsx'>NavBar.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/MessageCard.tsx'>MessageCard.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/alert-dialog.tsx'>alert-dialog.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/label.tsx'>label.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/input.tsx'>input.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/textarea.tsx'>textarea.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/separator.tsx'>separator.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/form.tsx'>form.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/carousel.tsx'>carousel.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/skeleton.tsx'>skeleton.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/switch.tsx'>switch.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/sonner.tsx'>sonner.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/components/ui/card.tsx'>card.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>context</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/context/AuthProvider.tsx'>AuthProvider.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>Helpers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/Helpers/sendverificationEmail.ts'>sendverificationEmail.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/globals.css'>globals.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>(auth)</b></summary>
						<blockquote>
							<details>
								<summary><b>signup</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(auth)/signup/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>signin</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(auth)/signin/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>verify</b></summary>
								<blockquote>
									<details>
										<summary><b>[username]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(auth)/verify/[username]/page.tsx'>page.tsx</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>(app)</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(app)/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(app)/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>dashboard</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/(app)/dashboard/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>u</b></summary>
						<blockquote>
							<details>
								<summary><b>[username]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/u/[username]/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/u/[username]/suggested.json'>suggested.json</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<details>
								<summary><b>get-messages</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/get-messages/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>message-delete</b></summary>
								<blockquote>
									<details>
										<summary><b>[messageId]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/message-delete/[messageId]/route.ts'>route.ts</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>verify-code</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/verify-code/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>suggest-messages</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/suggest-messages/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>signup</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/signup/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>auth</b></summary>
								<blockquote>
									<details>
										<summary><b>[...nextauth]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/auth/[...nextauth]/options.ts'>options.ts</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/auth/[...nextauth]/route.ts'>route.ts</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>check-unique-username</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/check-unique-username/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>send-reply</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/send-reply/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>send-message</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/send-message/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>accept-message</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/src/app/api/accept-message/route.ts'>route.ts</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- emails Submodule -->
		<summary><b>emails</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/emails/Reply.tsx'>Reply.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Subhams-GIT/Ama-App/blob/master/emails/VerificationEmail.tsx'>VerificationEmail.tsx</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with Ama-App, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install Ama-App using one of the following methods:

**Build from source:**

1. Clone the Ama-App repository:
```sh
❯ git clone https://github.com/Subhams-GIT/Ama-App
```

2. Navigate to the project directory:
```sh
❯ cd Ama-App
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run Ama-App using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/Subhams-GIT/Ama-App/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Subhams-GIT/Ama-App/issues)**: Submit bugs found or log feature requests for the `Ama-App` project.
- **💡 [Submit Pull Requests](https://github.com/Subhams-GIT/Ama-App/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Subhams-GIT/Ama-App
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Subhams-GIT/Ama-App/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Subhams-GIT/Ama-App">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
