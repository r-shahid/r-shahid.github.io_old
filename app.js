const url =
	'https://spreadsheets.google.com/feeds/list/1pKeMnD2BjY_BIPKFWaTPWBm4p0BI9_VVH3pAUiH50Z8/od6/public/values?alt=json';

fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
        json.feed.entry.forEach((ent) => {
            // making project div
            const $div = $('<div>').addClass('project')
            $('.projects').append($div);
            // making first row
            const $first_row = $('<div>').addClass('first-row')
            $($div).append($first_row)
            // title, gradient, label
            const $title = $('<div>').addClass('title')
            const $gradient = $('<div>').addClass('gradient')
            const $project_label = $('<div>').addClass('project-label')
            $($first_row).append($title);
            $($first_row).append($gradient);
            $($first_row).append($project_label);
            // making second row
            const $second_row = $('<div>').addClass('second-row')
            $($div).append($second_row)
            // project description
            const $proj_desc = $('<div>').addClass('project-desc')
            $($second_row).append($proj_desc);
            // making third row
            const $third_row = $('<div>').addClass('third-row')
            $($div).append($third_row)
            // left panel
            const $left_panel = $('<div>').addClass('left-panel')
            $($third_row).append($left_panel)
            //skills and links
            const $skills = $('<div>').addClass('project-skills')
            const $links = $('<div>').addClass('p-links');
            $($left_panel).append($skills);
            $($left_panel).append($links);
            // deployed links and repo links
            const $project_links = $('<div>').addClass('project-links')
            $($links).append($project_links)
            const $d_frontend = $('<div>').addClass('d-frontend')
            $($project_links).append($d_frontend)
            const $repo_links = $('<div>').addClass('repo-links')
            $($links).append($repo_links)
            const $r_frontend = $('<div>').addClass('frontend')
            const $r_backend = $('<div>').addClass('backend');
            $($repo_links).append($r_frontend)
            $($repo_links).append($r_backend);
            // project image
            const $proj_img = $('<div>').addClass('project-image')
            $($third_row).append($proj_img)
        })
    })