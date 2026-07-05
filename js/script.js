// CareerPilot AI - Shared JavaScript

function createCV(){
    let name = document.getElementById("fullname").value;
    let job = document.getElementById("jobtitle").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;

    document.getElementById("result").innerHTML = `
    <div class="cv">
        <div class="name">${name}</div>
        <div class="job">${job}</div>

        <div class="section">
            <h3>Professional Summary</h3>
            <p>Experienced professional seeking new opportunities to contribute and grow.</p>
        </div>

        <div class="section"><h3>Skills</h3><p>${skills}</p></div>
        <div class="section"><h3>Work Experience</h3><p>${experience}</p></div>
        <div class="section"><h3>Education</h3><p>${education}</p></div>
    </div>`;
}

function generateLetter(){
    let name = document.getElementById("fullname").value;
    let job = document.getElementById("job").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("result").innerHTML = `
    <div class="letter">
        <p>Dear Hiring Manager,</p>

        <p>I am writing to apply for the <strong>${job}</strong> position.</p>

        <p>My experience includes ${experience}. I am hardworking, reliable, and eager to contribute to your company.</p>

        <p>Thank you for your time and consideration. I look forward to hearing from you.</p>

        <p>Sincerely,</p>
        <p><strong>${name}</strong></p>
    </div>`;
}

function downloadPDF(){
    const element = document.getElementById("result");

    if(element.innerHTML.trim() === ""){
        alert("Please generate the document first.");
        return;
    }

    html2pdf().from(element).save("CareerPilot-Document.pdf");
}
function printCV(){
    const element = document.getElementById("result");

    if(element.innerHTML.trim() === ""){
        alert("Please generate your CV first.");
        return;
    }

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
        <html>
        <head>
            <title>Print CV</title>
            <style>
                body{ font-family: Arial; padding: 40px; }
                .cv{ max-width: 800px; margin: auto; }
                .name{ font-size:28px; font-weight:bold; }
                .job{ font-size:18px; color:#2e7d32; margin-bottom:20px; }
                .section{ margin-top:20px; }
                .section h3{ border-bottom:1px solid #ccc; padding-bottom:5px; }
            </style>
        </head>
        <body>
            ${element.innerHTML}
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.print();
}