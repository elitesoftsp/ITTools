(function($){
    $(function () {

        var questionId = $(".view-question #question").attr("data-post-id");
        // Check if this is question detail page. If it isn't, stop processing.
        if(questionId === undefined){
            return;
        }


        var backlogs = [
            {id: 1, title:"Backlog 1", url:"#"},

            {id: 2, title:"Backlog 2", url:"#"},

            {id: 3, title:"Backlog 3", url:"#"}
        ];

        var backlogs = EliteSoft.Confluence.Question.Answer.Extension.Templates.backlogList({
            backlogs: backlogs
        });

        var $questionSidebar = $("#question-sidebar");
        $questionSidebar.append(backlogs);

    });
}(AJS.$));