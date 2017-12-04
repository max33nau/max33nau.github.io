var bewanderChanges = [
  {
    id: 'create-review-chanages',
    title: 'Create a Review State',
    description: 'In the app as a user, you are given the ability to write a review on a certain location that you visited.',
    mainImageFolder: '../assets/images/projects/bewander/create-review/',
    uiChanges: [
      {
        description: 'The initial view when a user comes to write a review. I changed it so you do not see the form until after the user has entered a location',
        image: {
          before: 'before.png',
          after: 'after.png'
        }
      },
      {
        description: 'Fixes bugs when searching for location and will display the form now after the user enters a location.',
        image: {
          before: 'before-location.png',
          after: 'after-location.png'
        }
      },
      {
        description: 'Before the map was not responsive at all and looked borked on mobile. Now it is more responsive',
        image: {
          before: 'before-map-mobile.png',
          after: 'after-map-mobile.png'
        }
      },
      {
        description: 'Before the form was not responsive at all and now conforms to mobile.',
        image: {
          before: 'before-form-mobile.png',
          after: 'after-form-mobile.png'
        }
      }
    ]
  },
  {
    id: 'navbar-review-chanages',
    title: 'Navbar of the app',
    description: 'The overall navbar of the application and the dropdown lists that go along with it.',
    mainImageFolder: '../assets/images/projects/bewander/navbar/',
    uiChanges: [
      {
        description: 'Icons made the text and the overall paddings of the navbar not flow smoothly, I tried to make everything evenly padded. The red notifications were also borked.',
        image: {
          before: 'navbar-before.png',
          after: 'navbar-after.png'
        }
      },
      {
        description: 'When searching for wanderers, the modal was huge and did not display the selected users in a nice fashion.',
        image: {
          before: 'navbar-before-wanderer.png',
          after: 'navbar-after-wanderer.png'
        }
      },
      {
        description: 'Notification modal refactor',
        image: {
          before: 'navbar-before-notifications.png',
          after: 'navbar-after-notifications.png'
        }
      },
      {
        description: 'Messages now being displayed with padding.',
        image: {
          before: 'navbar-before-messages.png',
          after: 'navbar-after-messages.png'
        }
      }
    ]
  },
  {
    id: 'travelogue-review-chanages',
    title: 'Travelogue state',
    description: 'Creating and updating travelogues that a user can create within the application.',
    mainImageFolder: '../assets/images/projects/bewander/travelogue/',
    uiChanges: [
      {
        description: 'Initial setup to create a new travelogue',
        image: {
          before: 'travelogue-before-create.png',
          after: 'travelogue-after-create.png'
        }
      },
      {
        description: 'User puts in inputs for travelogue',
        image: {
          before: 'travelogue-before-inputs-create.png',
          after: 'travelogue-after-inputs-create.png'
        }
      },
      {
        description: 'After the user has successfully created a new travelogue.',
        image: {
          before: 'travelogue-before-success.png',
          after: 'travelogue-after-success.png'
        }
      },
      {
        description: 'Result of the list of travelogues.',
        image: {
          before: 'travelogue-before-list.png',
          after: 'travelogue-after-list.png'
        }
      },
      {
        description: 'Result with multiple items of travelogues.',
        image: {
          before: 'travelogue-before-multi-list.png',
          after: 'travelogue-after-multi-list.png'
        }
      },
      {
        description: 'Code to get all comments.',
        image: {
          before: 'before-comment.png',
          after: 'after-get-comments.png'
        }
      },
      {
        description: 'Code to get add a comment',
        image: {
          before: 'before-comment.png',
          after: 'after-add-comment.png'
        }
      },
      {
        description: 'Modal that displays comments',
        image: {
          before: 'before-nothing.png',
          after: 'comment-modal.png'
        }
      },

    ]
  }
]


$(document).ready(function() {

  var $projectBeforeAfter = $('#project-before-after');
  var changeHtml = '<div class="row project-change-container">'
  $.each(bewanderChanges, function(index, change) {
    changeHtml += '<div class="col-12 change-container" id="'+change.id+'">';
    changeHtml += '<h5 class="project-change-header">'+ change.title + '</h5>';
    changeHtml += '<p class="project-change-description">'+change.description + '</p>';
    if (change.uiChanges) {
      changeHtml = _addUiChanges(changeHtml, change.uiChanges, change.mainImageFolder);
    }
    changeHtml += '</div>';
  });
  changeHtml += '</div>';

  $projectBeforeAfter.html(changeHtml);

  $('.view-changes').on('click', function() {
    var $clicked = $(this);
    $('.view-changes').each(function(index) {
      $( this ).removeClass('view-selected');
    });
    $clicked.addClass('view-selected');
    $('.change-container').hide();
    var changeNumber = Number($clicked[0].id[$clicked[0].id.length - 1]);
    $('#'+bewanderChanges[changeNumber-1].id).show();
  });

  $('.view-changes')[0].click();

  function _addUiChanges(html, uiChanges, maingImageFolder) {
    html += '<div class="row ui-chages-container">';
    html += '<div class="col-6">';
    
    html += '</div>';
    html += '<div class="col-6">';
    
    html += '</div>';
    $.each(uiChanges, function(index, change) {
      html += '<div class="row ui-change-container">';
      if (change.image) {
        html += '<div class="col-6">';
        html += '<h6 class="text-center before-after-header">Before</h6>';
        html += '<img class="img-fluid img-thumbnail project-ui-change-image text-center" src="'+ maingImageFolder + change.image.before+'" />'
        html += '</div>';
        html += '<div class="col-6">';
        html += '<h6 class="text-center before-after-header">After </h6>';
        html += '<img class="img-fluid img-thumbnail project-ui-change-image text-center" src="'+ maingImageFolder + change.image.after+'" />'
        html += '</div>';
      }
      if (change.description) {
        html += '<div class="col-12">';
        html += '<p class="text-center project-ui-change-description">'+change.description + '</p>';
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    return html;
  }

});