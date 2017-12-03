/* Downloaded from https://www.codeseek.co/ */
$(function () {
    //Input gains focus on document ready
    //$('input').focus();

    //define function to add tasks to the list

    function addTodo() {
        if ($('input').val().trim() == "") {
            //show error message
            $('error').fadeIn(200);
        } else {
            //hide error message
            $('.error').hide();

            //Get input value
            var $todo = $('input').val();

            //create new list item
            var $newListItem = $('<li class = "todo">' + $todo + '<span>' +
                '<a href = "#" class = "check">' + '<i class = "fa fa-check fa-lg"></i>' + '</a>' +
                '<a href = "#" class = "delete-todo">' + '<i class = "fa fa-trash-o fa-lg"></i>' + '</a>' +
                '</span' + '</li>');

            // Add list item to end of list
            var $addListItem =
                $('ul').append($newListItem);

            //Hide list item before fading it into view
            $newListItem.hide().fadeIn(500);

            //Refocus input box for new task
            $('input').val("").focus;

        }

    };

    //clear error message when 'x' icon is clicked
    $('i.fa-times').on('click', function () {
        $(.error).hide();
    });

    //call addTodo funciton on click
    $('.add-todo').on('click', addTodo);

    //call addTodo function when enter key is pressed

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            addTodo();
        }
    });

    //clear typed text and refocus input box 

    $('.clear-text').on('click')
});