import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle, Image as RLImage
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from PIL import Image, ImageDraw, ImageFont

pdf_path_1 = "public/resume/Mohan-Sai-Resume.pdf"
pdf_path_2 = "public/resume/Kadirimangalam_Mohanasai_Resume.pdf"

os.makedirs("public/resume", exist_ok=True)
os.makedirs("scripts/icons", exist_ok=True)

# Generate crisp icons
def create_icons():
    # Phone Icon
    img = Image.new('RGBA', (64, 64), (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([20, 10, 44, 54], radius=4, fill=(15, 23, 42))
    d.rounded_rectangle([24, 16, 40, 44], radius=2, fill=(255, 255, 255))
    d.ellipse([30, 46, 34, 50], fill=(255, 255, 255))
    img.save("scripts/icons/phone.png")

    # Mail Icon
    img = Image.new('RGBA', (64, 64), (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([8, 16, 56, 48], radius=4, outline=(15, 23, 42), width=4)
    d.line([(8, 16), (32, 34), (56, 16)], fill=(15, 23, 42), width=4)
    img.save("scripts/icons/mail.png")

    # LinkedIn Icon
    img = Image.new('RGBA', (64, 64), (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([8, 8, 56, 56], radius=8, fill=(15, 23, 42))
    d.rectangle([16, 26, 22, 46], fill=(255, 255, 255))
    d.ellipse([16, 16, 22, 22], fill=(255, 255, 255))
    d.rectangle([28, 26, 34, 46], fill=(255, 255, 255))
    d.rounded_rectangle([34, 26, 46, 46], radius=6, fill=(255, 255, 255))
    d.rectangle([34, 32, 40, 46], fill=(15, 23, 42))
    img.save("scripts/icons/linkedin.png")

    # GitHub Icon
    img = Image.new('RGBA', (64, 64), (255, 255, 255, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([8, 8, 56, 56], fill=(15, 23, 42))
    d.ellipse([20, 20, 44, 44], fill=(255, 255, 255))
    d.ellipse([26, 28, 38, 44], fill=(15, 23, 42))
    img.save("scripts/icons/github.png")

create_icons()

def generate_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Title: Centered, Bold, Uppercase
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=21,
        leading=25,
        alignment=1, # Center
        textColor=colors.HexColor('#0f172a')
    )

    contact_text_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=1,
        textColor=colors.HexColor('#0f172a')
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=7,
        spaceAfter=1
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1e293b')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=12
    )

    bold_body_style = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#0f172a')
    )

    right_style = ParagraphStyle(
        'RightText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        alignment=2, # Right
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    # 1. Title
    story.append(Paragraph("KADIRIMANGALAM MOHANASAI", title_style))
    story.append(Spacer(1, 5))

    # 2. Contact Line
    p_img = RLImage("scripts/icons/phone.png", width=9.5, height=9.5)
    m_img = RLImage("scripts/icons/mail.png", width=9.5, height=9.5)
    l_img = RLImage("scripts/icons/linkedin.png", width=9.5, height=9.5)
    g_img = RLImage("scripts/icons/github.png", width=9.5, height=9.5)

    contact_table_data = [[
        p_img, Paragraph("7396484821", contact_text_style),
        Paragraph("|", contact_text_style),
        m_img, Paragraph("saikmohan1@gmail.com", contact_text_style),
        Paragraph("|", contact_text_style),
        l_img, Paragraph("k-mohanasai-a846612b3", contact_text_style),
        Paragraph("|", contact_text_style),
        g_img, Paragraph("mohansai1807", contact_text_style)
    ]]

    contact_table = Table(contact_table_data, colWidths=[12, 68, 12, 12, 122, 12, 12, 125, 12, 12, 80])
    contact_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('LEFTPADDING', (0,0), (-1,-1), 1),
        ('RIGHTPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    
    outer_table = Table([[contact_table]], colWidths=[540])
    outer_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(outer_table)
    story.append(Spacer(1, 4))

    def add_section_header(title_text):
        story.append(Paragraph(title_text, heading_style))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#64748b'), spaceBefore=1, spaceAfter=4))

    # 3. SUMMARY
    add_section_header("SUMMARY")
    story.append(Paragraph(
        "Enthusiastic and dedicated MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, Node.js and python. Proficient in building responsive, full-stack web applications using RESTful APIs, JavaScript, and modern web technologies.",
        body_style
    ))
    story.append(Spacer(1, 4))

    # 4. EDUCATION
    add_section_header("EDUCATION")
    edu_data = [
        [
            Paragraph("<b>Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</b><br/>Bachelor of Technology in Computer Science and Engineering", body_style),
            Paragraph("2023 – 2027<br/>9.3/10", right_style)
        ],
        [
            Paragraph("<b>Sri Chaitanya Junior College</b><br/>Intermediate (12th Grade)", body_style),
            Paragraph("2021 – 2023<br/>935/1000 (93%)", right_style)
        ],
        [
            Paragraph("<b>Prashanth English Medium High School</b><br/>Secondary School (10th Grade)", body_style),
            Paragraph("2020 – 2021<br/>594/600 (98%)", right_style)
        ]
    ]
    
    edu_table = Table(edu_data, colWidths=[410, 130])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 5. TECHNICAL SKILLS
    add_section_header("TECHNICAL SKILLS")
    story.append(Paragraph("&bull; <b>Programming Languages:</b> Python, JavaScript, HTML, CSS, SQL", bullet_style))
    story.append(Paragraph("&bull; <b>Frameworks & Libraries:</b> React.js, Express.js, Bootstrap", bullet_style))
    story.append(Paragraph("&bull; <b>Databases:</b> MongoDB, MySQL", bullet_style))
    story.append(Paragraph("&bull; <b>Tools & Technologies:</b> Node.js, EJS, Git, GitHub, Postman, Cloudinary, Mapbox", bullet_style))
    story.append(Spacer(1, 4))

    # 6. SOFT SKILLS
    add_section_header("SOFT SKILLS")
    story.append(Paragraph("&bull; Strong problem-solving and analytical thinking skills with attention to detail.", bullet_style))
    story.append(Paragraph("&bull; communication, teamwork, adaptability, and continuous learning mindset.", bullet_style))
    story.append(Spacer(1, 4))

    # 7. PROJECT EXPERIENCE
    add_section_header("PROJECT EXPERIENCE")
    
    proj_header_1 = Table([[Paragraph("<b>Kailasa Retreats</b> - MongoDB, Express.js, Node.js, EJS, Bootstrap", bold_body_style), Paragraph("2026", right_style)]], colWidths=[450, 90])
    proj_header_1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(proj_header_1)
    story.append(Paragraph("&bull; Developed a full-stack accommodation booking platform using MVC architecture, RESTful APIs, MongoDB, and server-side rendering with EJS.", bullet_style))
    story.append(Paragraph("&bull; Implemented authentication, authorization, CRUD operations, image uploads with Cloudinary, location mapping with Mapbox, and server-side validation using Joi.", bullet_style))
    story.append(Spacer(1, 3))

    proj_header_2 = Table([[Paragraph("<b>StyleHub</b> - MongoDB, Express.js, Node.js, EJS", bold_body_style), Paragraph("2026", right_style)]], colWidths=[450, 90])
    proj_header_2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(proj_header_2)
    story.append(Paragraph("&bull; Developed a full-stack e-commerce web application using the implementing JWT-based authentication, product catalog management, shopping cart functionality, and RESTful APIs.", bullet_style))
    story.append(Paragraph("&bull; Built responsive product browsing, search and cart management features while integrating MongoDB and Express.js to efficiently manage users, products, and order data through MVC architecture.", bullet_style))
    story.append(Spacer(1, 3))

    proj_header_3 = Table([[Paragraph("<b>Virtual Meeting Portal</b> - MERN, Socket.io, WebRTC", bold_body_style), Paragraph("2026", right_style)]], colWidths=[450, 90])
    proj_header_3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(proj_header_3)
    story.append(Paragraph("&bull; Developed a full-stack real-time video conferencing platform Which enabling users to securely create, join, and manage virtual meetings with JWT-based authentication and meeting room management.", bullet_style))
    story.append(Paragraph("&bull; Integrated WebRTC and Socket.io for low-latency video/audio communication, real-time chat, screen sharing, and multi-participant collaboration.", bullet_style))
    story.append(Spacer(1, 4))

    # 8. CERTIFICATIONS
    add_section_header("CERTIFICATIONS")
    story.append(Paragraph("&bull; Earned NxtWave Certification in Web Development and SQL", bullet_style))
    story.append(Paragraph("&bull; Completed a 2-Month Web Development Internship at 3Skill Company.", bullet_style))
    story.append(Paragraph("&bull; Earned a Python Programming Certificate from Vel Tech University.", bullet_style))

    doc.build(story)
    print(f"Generated {filename}")

generate_pdf(pdf_path_1)
generate_pdf(pdf_path_2)
