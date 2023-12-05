var attributeList = ["eyeglasses", "younger", "smile", "elsa", "surprised"];
var currentAttribute = "eyeglasses";


function displayImages(attribute, method, imageIndex) {
    var container = document.getElementById('imageGridContainer');
    var imageBasePath = './static/results/';

    // Construct image paths for the 'Input', selected method, and 'Ours'
    var inputImagePath = `${imageBasePath}image${imageIndex}_${attribute}_input.png`;
    var methodImagePath = `${imageBasePath}image${imageIndex}_${attribute}_${method}.png`;
    var oursImagePath = `${imageBasePath}image${imageIndex}_${attribute}_ours.png`;

    var displayMethod = method === 'wplus' ? 'W+' : currentMethod.toUpperCase();
        document.getElementById('methodTitle').innerText = displayMethod;
    // Update HTML to display images side by side
    container.innerHTML = `
        <div class="image-column"><h4>Input</h4><img src="${inputImagePath}" alt="Input Image ${imageIndex}"></div>
        <div class="image-column"><h4>${displayMethod.toUpperCase()}</h4><img src="${methodImagePath}" alt="${attribute} Image ${imageIndex}"></div>
        <div class="image-column"><h4>Ours</h4><img src="${oursImagePath}" alt="Ours Image ${imageIndex}"></div>
    `;
}

// function displayImages(attribute) {
//     var methods = ["input", "w", "wplus", "ide3d", "pti", "goae", "hfgi3d", "ours"];
//     var method_names = ["Input", "W", "W+", "IDE-3D",  "PTI", "GOAE", "HFGI3D", "Ours"]
//     var examples = ['image0', 'image1', 'image2', 'image3', 'image4']; // Replace with your examples list


//     var gridContainer = document.getElementById('imageGridContainer');
//     gridContainer.innerHTML = ''; // Clear existing content

//     // Create header row for titles
//     var headerRow = document.createElement('div');
//     headerRow.className = 'columns';

//     // Create column headers for each method
//     method_names.forEach(method => {
//         var headerCol = document.createElement('div');
//         headerCol.className = 'column has-text-weight-bold'; // Bulma class for bold text
//         headerCol.innerText = method; // Set the method name as title
//         headerRow.appendChild(headerCol);
//     });

//     gridContainer.appendChild(headerRow);

//     // Creating rows for images
//     examples.forEach(example => {
//         var rowDiv = document.createElement('div');
//         rowDiv.className = 'columns';

//         // Create image columns
//         methods.forEach(method => {
//             var imgDiv = document.createElement('div');
//             imgDiv.className = 'column';

//             var img = document.createElement('img');
//             img.src = './static/results/' + example + '_' + attribute + '_' + method + '.png'; // Adjust file extension if needed
//             img.alt = example + ' ' + method;
//             img.style = "width: 100%; height: auto;";

//             imgDiv.appendChild(img);
//             rowDiv.appendChild(imgDiv);
//         });

//         gridContainer.appendChild(rowDiv);
//     });
// }

// function displayVideos(attribute) {
//     var methods = ["input", "w", "wplus", "ide3d", "pti", "goae", "hfgi3d", "vive3d","ours"];
//     var method_names = ["Input", "W", "W+", "IDE-3D",  "PTI", "GOAE", "HFGI3D", "VIVE3D", "Ours"]
//     var examples = ['video0', 'video1', 'video2']; // Replace with your examples list

//     var gridContainer = document.getElementById('videoGridContainer');
//     gridContainer.innerHTML = ''; // Clear existing content

//     // Create header row for titles
//     var headerRow = document.createElement('div');
//     headerRow.className = 'columns';

//     // Create column headers for each method
//     method_names.forEach(method => {
//         var headerCol = document.createElement('div');
//         headerCol.className = 'column bold-header'; // Custom class for bold text
//         headerCol.innerText = method; // Set the method name as title
//         headerRow.appendChild(headerCol);
//     });

//     gridContainer.appendChild(headerRow);

//     // Creating rows for videos
//     examples.forEach(example => {
//         var rowDiv = document.createElement('div');
//         rowDiv.className = 'columns';

//         // Create video columns
//         methods.forEach(method => {
//             var videoDiv = document.createElement('div');
//             videoDiv.className = 'column';

//             var video = document.createElement('video');
//             video.src = './static/results/' + example + '_' + attribute + '_' + method + '.mp4';
//             video.controls = true;
//             video.autoplay = true;
//             video.muted = true; // Important for autoplay in most browsers
//             video.loop = true;
//             video.style = "width: 100%;";

//             videoDiv.appendChild(video);
//             rowDiv.appendChild(videoDiv);
//         });

//         gridContainer.appendChild(rowDiv);
//     });

    // var gridContainer = document.getElementById('videoGridContainer');
    // gridContainer.innerHTML = ''; // Clear existing content

    // examples.forEach(example => {
    //     var rowDiv = document.createElement('div');
    //     rowDiv.className = 'columns'; // Assuming Bulma's grid system

    //     methods.forEach(method => {
    //         var videoDiv = document.createElement('div');
    //         videoDiv.className = 'column';

    //         var video = document.createElement('video');
    //         video.src = './static/results/' + example + '_' + attribute + '_' + method + '.mp4';
    //         video.controls = true;
    //         video.autoplay = true;
    //         video.loop = true;
    //         video.muted = true; // Important for autoplay in most browsers
    //         video.style = "width: 100%;"; // Adjust as per your styling needs

    //         videoDiv.appendChild(video);
    //         rowDiv.appendChild(videoDiv);
    //     });

    //     gridContainer.appendChild(rowDiv);
    // });
// }

function change_ablation(case_name) {
    console.log(case_name);
    
    // Paths for your three video sources
    var videoSources = [
        './static/results/' + case_name + '_1.mp4',
        './static/results/' + case_name + '_2.mp4'
    ];

    // Update each video
    for (var i = 1; i <= 2; i++) {
        var video = document.getElementById('video_ablation' + i);
        var source = document.getElementById('source_ablation' + i);
        video.pause();
        source.setAttribute('src', videoSources[i - 1]);
        video.load();
        video.play();
        video.loop = true;

        var label1 = document.getElementById('label-abla' + i + '-1');
        var label2 = document.getElementById('label-abla' + i + '-2');

        if(case_name == 'Lb') {
            label1.innerHTML = "w/o blending weight regularization";
            label2.innerHTML = "w/ blending weight regularization (Eqn.6)";
        } else {
            label1.innerHTML = "w/o latent regularization";
            label2.innerHTML = "w/ latent regularization (Eqn.1)";
        }
    }

    // Labels Update
    // for (var i = 1; i <= 3; i++) {
    //     var label1 = document.getElementById('label-abla' + i + '-1');
    //     var label2 = document.getElementById('label-abla' + i + '-2');

    //     if(case_name == 'wo_Lb') {
    //         label1.innerHTML = "w/o blending weight regularization";
    //         label2.innerHTML = "w/ blending weight regularization (Eqn.6)";
    //     } else {
    //         label1.innerHTML = "w/o latent regularization";
    //         label2.innerHTML = "w/ latent regularization (Eqn.1)";
    //     }
    // }
    // var label1 = document.getElementById('label-abla');
    // var label2 = document.getElementById('label-full');

    // if(case_name == 'wo_Lb') {
    //     label1.innerHTML = "w/o blending weight regularization";
    //     label2.innerHTML = "w/ blending weight regularization (Eqn.6)";
    // } else {
    //     label1.innerHTML = "w/o latent regularization";
    //     label2.innerHTML = "w/ latent regularization (Eqn.1)";
    // }
}