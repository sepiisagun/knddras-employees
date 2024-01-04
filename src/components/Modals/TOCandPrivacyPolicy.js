import { Box, Button, Divider, Flex, Heading, Link, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, Text, UnorderedList } from "@chakra-ui/react"
import React from "react"

const TOCandPrivacyPolicy = ({ isOpen, onClose, onOpen }) => {
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    return (
        <>
            <Button ref={btnRef} onClick={onOpen} bg="transparent" variant="link" mb={5} mt={2}>
                Terms and Conditions
            </Button>
            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
                size="4xl"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={50}>
                        <Box py={4}>
                            <Heading as='h3' size='2xl'>
                                Terms and Conditions
                            </Heading>
                            <Text p={2} color="gray">
                                Last updated: December 26, 2023
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                AGREEMENT TO OUR LEGAL TERMS
                            </Heading>
                            <Box>
                                We are <Text as="span" fontWeight="bold" color="teal">Klinika ng Dentista</Text> ("Company," "we," "us," "our"), a company registered in the Philippines at Abanao Street, Baguio City, Benguet 2600.

                                We operate the website https://knddras-clients.sefserver.de/ (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                Klinika ng Dentista Dental Records and Appointment System (KNDDRAS) is a web application designed to help patients set up check-up and treatment appointments and manage their dental records online.
                            </Heading>
                            <Text>
                                You can contact us by phone at (074) 300 3850, email at <Text as="span">knd@gmail.com</Text>, or by mail to Abanao Street, Baguio City, Benguet 2600, Philippines.

                                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Klinika ng Dentista, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.

                                We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by knd@gmail.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.

                                All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                Table of Contents
                            </Heading>
                            <OrderedList pl={8}>
                                <ListItem>Our Services</ListItem>
                                <ListItem>Intellectual Property Rights</ListItem>
                                <ListItem>User Representations</ListItem>
                                <ListItem>User Registration</ListItem>
                                <ListItem>Prohibited Activities</ListItem>
                                <ListItem>User Generated Contributions</ListItem>
                                <ListItem>Contribution License</ListItem>
                                <ListItem>Services Management</ListItem>
                                <ListItem>Privacy Policy</ListItem>
                                <ListItem>Copyright Infringements</ListItem>
                                <ListItem>Term and Termination</ListItem>
                                <ListItem>Modifications and Interruptions</ListItem>
                                <ListItem>Governing Law</ListItem>
                                <ListItem>Dispute Resolution</ListItem>
                                <ListItem>Corrections</ListItem>
                                <ListItem>Disclaimer</ListItem>
                                <ListItem>Limitations of Liability</ListItem>
                                <ListItem>Indemnification</ListItem>
                                <ListItem>User Data</ListItem>
                                <ListItem>Electronic Communications, Transactions, and Signatures</ListItem>
                                <ListItem>Miscellaneous</ListItem>
                                <ListItem>Contact Us</ListItem>
                            </OrderedList>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Our Services</Heading>
                            <Text>
                                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Intellectual Property Rights</Heading>
                            <Text>
                                Our intellectual property

                                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").

                                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.

                                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.

                                Your use of our Services

                                Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
                                access the Services; and
                                download or print a copy of any portion of the Content to which you have properly gained access.
                                solely for your personal, non-commercial use or internal business purpose.

                                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.

                                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: knd@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.

                                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.

                                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.

                                Your submissions and contributions

                                Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.

                                Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.

                                Contributions: The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.

                                You understand that Contributions may be viewable by other users of the Services.

                                When you post Contributions, you grant us a license (including use of your name, trademarks, and logos): By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels.

                                This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.

                                You are responsible for what you post or upload: By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:
                                <UnorderedList pl={8}>
                                    <ListItem>
                                        confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
                                    </ListItem>
                                    <ListItem>
                                        to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;
                                    </ListItem>
                                    <ListItem>
                                        warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and
                                    </ListItem>
                                    <ListItem>
                                        warrant and represent that your Submissions and/or Contributions do not constitute confidential information.
                                    </ListItem>
                                </UnorderedList>
                                You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.

                                We may remove or edit your Content: Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.

                                Copyright infringement

                                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the "COPYRIGHT INFRINGEMENTS" section below.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>User Representations</Heading>
                            <Text>
                                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.

                                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>User Registration</Heading>
                            <Text>
                                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Prohibited Activities</Heading>
                            <Text>
                                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

                                As a user of the Services, you agree not to:
                                <UnorderedList pl={8}>
                                    <ListItem>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission

                                        from us.</ListItem>
                                    <ListItem>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</ListItem>

                                    <ListItem>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</ListItem>

                                    <ListItem>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</ListItem>
                                    <ListItem>Use any information obtained from the Services in order to harass, abuse, or harm another person.</ListItem>

                                    <ListItem>Make improper use of our support services or submit false reports of abuse or misconduct.</ListItem>

                                    <ListItem>Use the Services in a manner inconsistent with any applicable laws or regulations.</ListItem>

                                    <ListItem>Engage in unauthorized framing of or linking to the Services.</ListItem>

                                    <ListItem>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</ListItem>

                                    <ListItem>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</ListItem>

                                    <ListItem>Delete the copyright or other proprietary rights notice from any Content.</ListItem>

                                    <ListItem>Attempt to impersonate another user or person or use the username of another user.</ListItem>

                                    <ListItem>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</ListItem>

                                    <ListItem>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</ListItem>

                                    <ListItem>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</ListItem>
                                    <ListItem>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</ListItem>
                                    <ListItem>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</ListItem>

                                    <ListItem>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</ListItem>
                                    <ListItem>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</ListItem>

                                    <ListItem>Use a buying agent or purchasing agent to make purchases on the Services.</ListItem>
                                    <ListItem>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</ListItem>
                                    <ListItem>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</ListItem>
                                    <ListItem>Trick, defraud, or mislead you or other users, especially in any attempt to learn sensitive account information such as user passwords.</ListItem>
                                    <ListItem>Systematically retrieving data or content from your Site to create a collection or database without written permission from you.</ListItem>
                                    <ListItem>Circumvent, disable, or otherwise interfere with security-related features of KNDDRAS. This includes features that prevent/restrict the use of any content limits site usage.</ListItem>
                                    <ListItem>Harass, abuse, or harm another person using any information obtained from KNDDRAS.</ListItem>
                                    <ListItem>Framing or linking to KNDDRAS without authorization.</ListItem>
                                    <ListItem>Attempt to upload or transmit viruses, Trojan horses, malicious scripts, or other materials (including excessive use of capital letters and spamming) that interferes with any party’s uninterrupted use of KNDDRAS and its features.</ListItem>
                                    <ListItem>Use scripts, data-mining, robots, or similar data gathering tools to send comments or messages.</ListItem>
                                    <ListItem>Delete the copyright or other proprietary rights notice from any content.</ListItem>
                                    <ListItem>Impersonate another user or person or use the username of another user.</ListItem>
                                    <ListItem>Upload any materials that actively or passively collects information or acts as a transmission mechanism (includes gifs, 1x1 pixels, web bugs, cookies, spyware, pcms, etc.)</ListItem>
                                    <ListItem>Interfere, disrupt, or create an undue burden on KNDDRAS's services.</ListItem>
                                    <ListItem>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of KNDDRAS to you.</ListItem>
                                    <ListItem>Bypass measures of KNDDRAS designed to prevent/restrict access.</ListItem>
                                    <ListItem>Decipher, decompile, disassemble, or reverse engineer any of the software that makes up KNDDRAS.</ListItem>
                                    <ListItem>Use KNDDRAS in an unauthorized way (collecting usernames, email addresses, of users for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses).</ListItem>

                                </UnorderedList>
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>User Generated Contributions</Heading>
                            <Text>
                                The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                                <UnorderedList pl={8}>
                                    <ListItem>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</ListItem>

                                    <ListItem>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</ListItem>

                                    <ListItem>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</ListItem>

                                    <ListItem>Your Contributions are not false, inaccurate, or misleading.</ListItem>

                                    <ListItem>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</ListItem>

                                    <ListItem>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</ListItem>

                                    <ListItem>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</ListItem>

                                    <ListItem>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</ListItem>

                                    <ListItem>Your Contributions do not violate any applicable law, regulation, or rule.</ListItem>

                                    <ListItem>Your Contributions do not violate the privacy or publicity rights of any third party.</ListItem>

                                    <ListItem>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</ListItem>

                                    <ListItem>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</ListItem>

                                    <ListItem>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</ListItem>
                                </UnorderedList>
                                Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Contribution License</Heading>
                            <Text>
                                By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.

                                This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.

                                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.

                                We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Services Management</Heading>
                            <Text>
                                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Privacy Policy</Heading>
                            <Text>
                                We care about data privacy and security. Please review our Privacy Policy: https://knddras-clients.sefserver.de/privacy-policy. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the Philippines. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the Philippines, then through your continued use of the Services, you are transferring your data to the Philippines, and you expressly consent to have your data transferred to and processed in the Philippines.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Copyright Infringements</Heading>
                            <Text>
                                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Term and Termination</Heading>
                            <Text>
                                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.

                                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Modifications and Interruptions</Heading>
                            <Text>
                                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.

                                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Governing Law</Heading>
                            <Text>
                                These Legal Terms shall be governed by and defined following the laws of the Philippines. Klinika ng Dentista and yourself irrevocably consent that the courts of the Philippines shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Dispute Resolution</Heading>
                            <Text>

                                You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the Philippines courts. Klinika ng Dentista shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Corrections</Heading>
                            <Text>
                                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Disclaimer</Heading>
                            <Text>
                                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Limitations of Liability</Heading>
                            <Text>
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Indemnification</Heading>
                            <Text>
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>User Data</Heading>
                            <Text>
                                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Electronic Communications, Transactions, and Signatures</Heading>
                            <Text>
                                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Miscellaneous</Heading>
                            <Text>
                                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>Contact Us</Heading>
                            <Text>
                                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                            </Text>
                            <Box pl={8}>
                                <Text>
                                    Klinika ng Dentista
                                </Text>
                                <Text>
                                    Abanao Street
                                </Text>
                                <Text>
                                    Baguio City, Benguet 2600
                                </Text>
                                <Text>
                                    Philippines
                                </Text>
                                <Text>
                                    Phone: (074) 300 3850
                                </Text>
                                <Text>
                                    Email: knd@gmail.com
                                </Text>
                            </Box>
                        </Box>
                        <Divider />
                        {/* PRIVACY POLICY */}
                        <Box py={4} pt={8}>
                            <Heading as='h3' size='2xl'>
                                Privacy Policy
                            </Heading>
                            <Text p={2} color="gray">
                                Last updated: December 26, 2023
                            </Text>
                        </Box>
                        <Box py={4}>
                            <Box>
                                This privacy notice for Klinika ng Dentista ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                                <UnorderedList pl={8} py={2}>
                                    <ListItem>
                                        Visit our website at https://knddras-clients.sefserver.de/, or any website of ours that links to this privacy notice
                                    </ListItem>
                                    <ListItem>
                                        Engage with us in other related ways, including any sales, marketing, or events
                                    </ListItem>
                                </UnorderedList>
                                <Text as="span" fontWeight="bold">Questions or concerns?</Text> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at knd@gmail.com.
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                SUMMARY OF KEY POINTS
                            </Heading>
                            <Text>
                                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                            </Text>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        What personal information do we process?
                                    </Text>
                                    When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        personal information you disclose to us.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        Do we process any sensitive personal information?
                                    </Text>
                                    We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        sensitive information we process.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        Do we receive any information from third parties?
                                    </Text>
                                    We do not receive any information from third parties.
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        How do we process your information?
                                    </Text>
                                    We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        how we process your information.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        In what situations and with which parties do we share personal information?
                                    </Text>
                                    We may share information in specific situations and with specific third parties. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        when and with whom we share your personal information.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        How do we keep your information safe?
                                    </Text>
                                    We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        how we keep your information safe.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        What are your rights?
                                    </Text>
                                    Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about
                                    <Link color='teal.500' href='#' px={1}>
                                        your privacy rights.
                                    </Link>
                                </Text>
                            </Box>
                            <Box py={2}>
                                <Text>
                                    <Text as="span" fontWeight="bold" pr={1}>
                                        How do you exercise your rights?
                                    </Text>
                                    The easiest way to exercise your rights is by submitting a
                                    <Link color='teal.500' href='#' px={1}>
                                        data subject access request
                                    </Link>
                                    , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                                </Text>
                            </Box>
                            <Box py={2}>
                                Want to learn more about what we do with any information we collect?
                                <Link color='teal.500' href='#' px={1}>Review the privacy notice in full.</Link>
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                Table of Contents
                            </Heading>
                            <OrderedList pl={8}>
                                <ListItem>What information do we collect?</ListItem>
                                <ListItem>How do we process your information?</ListItem>
                                <ListItem>When and with whom do we share your personal information?</ListItem>
                                <ListItem>How long do we keep your information?</ListItem>
                                <ListItem>How do we keep your information safe?</ListItem>
                                <ListItem>What are your privacy rights?</ListItem>
                                <ListItem>Controls for do-not-track features</ListItem>
                                <ListItem>Do we make updates to this notice?</ListItem>
                                <ListItem>How can you contact us about this notice?</ListItem>
                                <ListItem>How can you review, update, or delete the data we collect from you?</ListItem>
                            </OrderedList>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                What information do we collect?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                We collect personal information that you provide to us.
                            </Text>
                            <Box py={2}>
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            </Box>
                            <Box>
                                <Text as="span" fontWeight="bold" pr={1}>
                                    Personal Information Provided by You.
                                </Text>
                                The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                                <UnorderedList py={2} pl={8}>
                                    <ListItem>names</ListItem>

                                    <ListItem>phone numbers</ListItem>

                                    <ListItem>email addresses</ListItem>

                                    <ListItem>usernames</ListItem>

                                    <ListItem>passwords</ListItem>

                                    <ListItem>contact preferences</ListItem>

                                    <ListItem>contact or authentication data</ListItem>

                                    <ListItem>photos</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box>
                                <Text as="span" fontWeight="bold" pr={1}>
                                    Sensitive Information.
                                </Text>
                                When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
                                <UnorderedList py={2} pl={8}>
                                    <ListItem>health data</ListItem>

                                    <ListItem>social security numbers or other government identifiers</ListItem>
                                </UnorderedList>
                                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                How do we process your information?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                            </Text>
                            <Box py={2}>
                                <Text fontWeight="bold">
                                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                                </Text>
                                <UnorderedList py={2} pl={8}>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To facilitate account creation and authentication and otherwise manage user accounts.
                                        </Text>
                                        We may process your information so you can create and log in to your account, as well as keep your account in working order.
                                    </ListItem>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To deliver and facilitate delivery of services to the user.
                                        </Text>
                                        We may process your information to provide you with the requested service.
                                    </ListItem>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To respond to user inquiries/offer support to users.
                                        </Text>
                                        We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                                    </ListItem>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To send administrative information to you.
                                        </Text>
                                        We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                                    </ListItem>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To protect our Services.
                                        </Text>
                                        We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.
                                    </ListItem>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            To comply with our legal obligations.
                                        </Text>
                                        We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                When and with whom do we share your personal information?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                We may share information in specific situations described in this section and/or with the following third parties.
                            </Text>
                            <Box>
                                We may need to share your personal information in the following situations:
                                <UnorderedList py={2} pl={8}>
                                    <ListItem>
                                        <Text as="span" pr={1} fontWeight="bold">
                                            Business Transfers.
                                        </Text>
                                        We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                How long do we keep your information?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                            </Text>
                            <Box>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than   sixty (60) months past the start of the idle period of the user's account.

                                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.

                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                How do we keep your information safe?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                We aim to protect your personal information through a system of organizational and technical security measures.
                            </Text>
                            <Box>
                                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                What are your privacy rights?
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>
                                You may review, change, or terminate your account at any time.
                            </Text>
                            <Box>
                                <Text as="span" pr={1} fontWeight="bold">
                                    Withdrawing your consent:
                                </Text>
                                If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "
                                <Link color='teal.500' href='#' px={1}>
                                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                </Link>
                                " below.
                                <Text>
                                    However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" py={4}>
                                    Account Information
                                </Text>
                                <Text>
                                    If you would at any time like to review or change the information in your account or terminate your account, you can:
                                    <UnorderedList py={2} pl={8}>
                                        <ListItem>
                                            Log in to your account settings and update your user account.
                                        </ListItem>
                                    </UnorderedList>
                                    Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                                </Text>
                                <Text py={2}>
                                    If you have questions or comments about your privacy rights, you may email us at knd@gmail.com.
                                </Text>
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                Controls for do-not-track features
                            </Heading>
                            <Text>
                                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.

                            </Text>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                Yes, we will update this notice as necessary to stay compliant with relevant laws.
                            </Heading>
                            <Text as="i">
                                <Text as="span" fontWeight="bold" pr={1}>
                                    In short:
                                </Text>

                            </Text>
                            <Box>
                                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                How can you contact us about this notice?
                            </Heading>
                            <Text>
                                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                            </Text>
                            <Box pl={8}>
                                <Text>
                                    Klinika ng Dentista
                                </Text>
                                <Text>
                                    Abanao Street
                                </Text>
                                <Text>
                                    Baguio City, Benguet 2600
                                </Text>
                                <Text>
                                    Philippines
                                </Text>
                                <Text>
                                    Phone: (074) 300 3850
                                </Text>
                                <Text>
                                    Email: knd@gmail.com
                                </Text>
                            </Box>
                        </Box>
                        <Box py={4}>
                            <Heading as="h3" size="lg" py={3}>
                                How can you review, update, or delete the data we collect from you?
                            </Heading>
                            <Text>
                                Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a
                                <Link color='teal.500' href='#' px={1}>
                                    data subject access request.
                                </Link>
                            </Text>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TOCandPrivacyPolicy