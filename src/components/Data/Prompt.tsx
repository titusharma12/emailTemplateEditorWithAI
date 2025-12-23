import dedent from "dedent";

export default {
  EMAIL_PROMPT: dedent`
    Generate a complete email template as a JSON array. Follow these rules EXACTLY:

    OUTPUT FORMAT:
    - Return ONLY a JSON array starting with [ and ending with ]
    - NO markdown, NO explanations, NO comments
    - Use double quotes for all strings
    - No line breaks inside string values

    MANDATORY STRUCTURE - YOU MUST INCLUDE ALL 9 SECTIONS:

    Section 1: LOGO HEADER (1 Column)
    Section 2: HERO IMAGE (1 Column) - use Unsplash URL
    Section 3: HEADLINE + SUBTEXT (1 Column) - 2 Text elements
    Section 4: INTRO PARAGRAPH (1 Column) - 1 Text element
    Section 5: FEATURES HEADING + LIST (1 Column) - 1 Text + 1 List element ⚠️ MANDATORY
    Section 6: IMAGE + TEXT (2 Column) - use different Unsplash URL
    Section 7: BENEFITS HEADING + LIST (1 Column) - 1 Text + 1 List element ⚠️ MANDATORY
    Section 8: CTA BUTTON (1 Column)
    Section 9: FOOTER (1 Column) - 4 elements: Contact Text + Links Text + SocialIcons + Copyright

    IMAGE URLS - USE THESE EXACT URLS (rotate through them):
    - https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbGV8ZW58MHx8MHx8fDA%3D
    - https://images.unsplash.com/photo-1572584642822-6f8de0243c93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbGV8ZW58MHx8MHx8fDA%3D
    - https://images.unsplash.com/photo-1611403570720-162d8829689a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    - https://images.unsplash.com/photo-1766324934839-313529832615?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    - Logo: /logo.svg (ONLY for LogoHeader)

    LIST ELEMENT - ⚠️ COPY THIS EXACTLY (REQUIRED IN SECTIONS 5 AND 7):
    {
      "type": "List",
      "label": "Features List",
      "listItems": ["First benefit or feature here", "Second benefit or feature here", "Third benefit or feature here", "Fourth benefit or feature here"],
      "listType": "unordered",
      "style": {
        "backgroundColor": "#fff",
        "color": "#000000",
        "padding": "10px",
        "fontSize": "16px",
        "lineHeight": "1.5",
        "margin": "0px",
        "listStyleType": "disc",
        "listStylePosition": "inside",
        "paddingLeft": "20px"
      },
      "listStyle": {
        "display": "list-item",
        "marginBottom": "8px"
      },
      "outerStyle": {
        "backgroundColor": "#fff",
        "width": "100%",
        "padding": "10px"
      },
      "id": 1011
    }

    OTHER ELEMENT TEMPLATES:

    LogoHeader:
    {
      "type": "LogoHeader",
      "label": "Logo Header",
      "imageUrl": "/logo.svg",
      "alt": "Company Logo",
      "url": "#",
      "style": {"backgroundColor": "#ffffff", "padding": "20px", "height": "40%", "width": "40%"},
      "outerStyle": {"display": "flex", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff", "width": "100%"},
      "id": 1001
    }

    Image:
    {
      "type": "Image",
      "label": "Hero Image",
      "imageUrl": "PICK_UNSPLASH_URL_FROM_LIST_ABOVE",
      "alt": "Hero Banner",
      "url": "#",
      "style": {"backgroundColor": "#ffffff", "padding": "0px", "width": "100%"},
      "outerStyle": {"display": "flex", "width": "100%", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff"},
      "id": 1003
    }

    Text:
    {
      "type": "Text",
      "label": "Heading",
      "textarea": "Your text content here",
      "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "30px 20px 10px", "textAlign": "center", "fontSize": "32px", "fontWeight": "bold"},
      "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
      "id": 1005
    }

    Button:
    {
      "type": "Button",
      "label": "CTA Button",
      "content": "Get Started Now",
      "url": "#",
      "style": {"textAlign": "center", "backgroundColor": "#007bff", "color": "#ffffff", "padding": "14px 32px", "fontSize": "16px", "borderRadius": "6px", "fontWeight": "bold", "border": "none"},
      "outerStyle": {"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%", "padding": "30px 0"},
      "id": 1016
    }

    SocialIcons (REQUIRED IN FOOTER):
    {
      "type": "SocialIcons",
      "label": "Social Icons",
      "socialIcons": [
        {"icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png", "url": "#"},
        {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png", "url": "#"},
        {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png", "url": "#"}
      ],
      "options": [
        {"icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png", "url": "#"},
        {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png", "url": "#"},
        {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png", "url": "#"}
      ],
      "style": {"width": 40, "height": 40},
      "outerStyle": {"display": "flex", "gap": 15, "justifyContent": "center", "alignItems": "center", "width": "100%", "padding": "15px 0"},
      "id": 1020
    }

    COMPLETE TEMPLATE EXAMPLE (9 SECTIONS - FOLLOW THIS STRUCTURE):
    [
      {
        "0": {
          "type": "LogoHeader",
          "label": "Logo Header",
          "imageUrl": "/logo.svg",
          "alt": "Company Logo",
          "url": "#",
          "style": {"backgroundColor": "#ffffff", "padding": "20px", "height": "40%", "width": "40%"},
          "outerStyle": {"display": "flex", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff", "width": "100%"},
          "id": 1001
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1002}
      },
      {
        "0": {
          "type": "Image",
          "label": "Hero Image",
          "imageUrl": "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbGV8ZW58MHx8MHx8fDA%3D",
          "alt": "Hero Banner",
          "url": "#",
          "style": {"backgroundColor": "#ffffff", "padding": "0px", "width": "100%"},
          "outerStyle": {"display": "flex", "width": "100%", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff"},
          "id": 1003
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1004}
      },
      {
        "0": {
          "type": "Text",
          "label": "Main Headline",
          "textarea": "Welcome to Our Amazing Service",
          "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "30px 20px 10px", "textAlign": "center", "fontSize": "32px", "fontWeight": "bold"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1005
        },
        "1": {
          "type": "Text",
          "label": "Subheadline",
          "textarea": "Discover features that will transform your workflow",
          "style": {"backgroundColor": "#fff", "color": "#6c757d", "padding": "0px 20px 30px", "textAlign": "center", "fontSize": "16px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1006
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1007}
      },
      {
        "0": {
          "type": "Text",
          "label": "Introduction",
          "textarea": "We are excited to share our latest innovations with you. Our team has been working to create something special that will make your life easier and more productive.",
          "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "20px", "textAlign": "left", "fontSize": "16px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1008
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1009}
      },
      {
        "0": {
          "type": "Text",
          "label": "Features Heading",
          "textarea": "Key Features",
          "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "30px 20px 10px", "textAlign": "center", "fontSize": "24px", "fontWeight": "bold"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1010
        },
        "1": {
          "type": "List",
          "label": "Features List",
          "listItems": ["Automated workflow management that saves hours", "Real-time team collaboration tools", "Advanced analytics and reporting dashboard", "Mobile apps for iOS and Android"],
          "listType": "unordered",
          "style": {"backgroundColor": "#fff", "color": "#000000", "padding": "10px", "fontSize": "16px", "lineHeight": "1.5", "margin": "0px", "listStyleType": "disc", "listStylePosition": "inside", "paddingLeft": "20px"},
          "listStyle": {"display": "list-item", "marginBottom": "8px"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%", "padding": "10px"},
          "id": 1011
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1012}
      },
      {
        "0": {
          "type": "Image",
          "label": "Feature Image",
          "imageUrl": "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbGV8ZW58MHx8MHx8fDA%3D",
          "alt": "Feature showcase",
          "url": "#",
          "style": {"backgroundColor": "#ffffff", "padding": "10px", "width": "100%", "borderRadius": "8px"},
          "outerStyle": {"display": "flex", "width": "100%", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff"},
          "id": 1013
        },
        "1": {
          "type": "Text",
          "label": "Feature Description",
          "textarea": "Our smart automation learns your preferences and adapts to your workflow. Set it up once and let it work for you while you focus on what matters most.",
          "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "20px", "textAlign": "left", "fontSize": "16px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1014
        },
        "dragLayout": {"type": "column", "numOfCol": 2, "label": "2 Column", "id": 1015}
      },
      {
        "0": {
          "type": "Text",
          "label": "Benefits Heading",
          "textarea": "Why Choose Us",
          "style": {"backgroundColor": "#fff", "color": "#1f2937", "padding": "30px 20px 10px", "textAlign": "center", "fontSize": "24px", "fontWeight": "bold"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1023
        },
        "1": {
          "type": "List",
          "label": "Benefits List",
          "listItems": ["Save time with intelligent automation", "Collaborate seamlessly with your team", "Get insights from powerful analytics", "Access from anywhere on any device"],
          "listType": "unordered",
          "style": {"backgroundColor": "#fff", "color": "#000000", "padding": "10px", "fontSize": "16px", "lineHeight": "1.5", "margin": "0px", "listStyleType": "disc", "listStylePosition": "inside", "paddingLeft": "20px"},
          "listStyle": {"display": "list-item", "marginBottom": "8px"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%", "padding": "10px"},
          "id": 1024
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1025}
      },
      {
        "0": {
          "type": "Button",
          "label": "Primary CTA",
          "content": "Get Started Now",
          "url": "#",
          "style": {"textAlign": "center", "backgroundColor": "#007bff", "color": "#ffffff", "padding": "14px 32px", "fontSize": "16px", "borderRadius": "6px", "fontWeight": "bold", "border": "none"},
          "outerStyle": {"display": "flex", "justifyContent": "center", "alignItems": "center", "width": "100%", "padding": "30px 0"},
          "id": 1016
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1017}
      },
      {
        "0": {
          "type": "Text",
          "label": "Footer Contact",
          "textarea": "Your Company | 123 Business St | New York, NY 10001 | contact@company.com | (555) 123-4567",
          "style": {"backgroundColor": "#fff", "color": "#6c757d", "padding": "30px 20px 10px", "textAlign": "center", "fontSize": "12px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1018
        },
        "1": {
          "type": "Text",
          "label": "Footer Links",
          "textarea": "Privacy Policy | Terms of Service | Unsubscribe",
          "style": {"backgroundColor": "#fff", "color": "#6c757d", "padding": "10px 20px", "textAlign": "center", "fontSize": "12px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1019
        },
        "2": {
          "type": "SocialIcons",
          "label": "Social Icons",
          "socialIcons": [
            {"icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png", "url": "#"},
            {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png", "url": "#"},
            {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png", "url": "#"}
          ],
          "options": [
            {"icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png", "url": "#"},
            {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968852.png", "url": "#"},
            {"icon": "https://cdn-icons-png.flaticon.com/128/5968/5968756.png", "url": "#"}
          ],
          "style": {"width": 40, "height": 40},
          "outerStyle": {"display": "flex", "gap": 15, "justifyContent": "center", "alignItems": "center", "width": "100%", "padding": "15px 0"},
          "id": 1020
        },
        "3": {
          "type": "Text",
          "label": "Copyright",
          "textarea": "© 2024 Your Company. All rights reserved.",
          "style": {"backgroundColor": "#fff", "color": "#9ca3af", "padding": "10px 20px 30px", "textAlign": "center", "fontSize": "11px", "fontWeight": "normal"},
          "outerStyle": {"backgroundColor": "#fff", "width": "100%"},
          "id": 1021
        },
        "dragLayout": {"type": "column", "numOfCol": 1, "label": "1 Column", "id": 1022}
      }
    ]

    CRITICAL RULES - READ CAREFULLY:
    1. Start IDs at 1001, increment by 1 for each element
    2. ⚠️ MUST include exactly 2 List elements (in sections 5 and 7)
    3. List property names: "listItems" (NOT "items"), "listType" (NOT "listStyle")
    4. listType values: "unordered" or "ordered"
    5. List MUST have "listStyle" object with display and marginBottom
    6. Text elements: use "textarea" property
    7. Button elements: use "content" property
    8. Images: use Unsplash URLs (NOT /image.png)
    9. Logo: use /logo.svg only for LogoHeader
    10. Footer MUST have SocialIcons with both socialIcons and options arrays
    11. Return ONLY JSON array - no markdown, no explanations
    12. Follow the 9-section structure exactly as shown in example

    CHECKLIST BEFORE GENERATING:
    ✓ Section 5 has List element with "listItems" array
    ✓ Section 7 has List element with "listItems" array  
    ✓ Both Lists have "listType" property
    ✓ Both Lists have "listStyle" object
    ✓ Footer has SocialIcons with both arrays
    ✓ All Images use Unsplash URLs
    ✓ All IDs start at 1001 and increment

    Now generate the template based on the user's request, following the exact structure above.
  `
};