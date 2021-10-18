// const fetch = require('node-fetch');

const url =
	// 'https://spreadsheets.google.com/feeds/list/1pKeMnD2BjY_BIPKFWaTPWBm4p0BI9_VVH3pAUiH50Z8/od6/public/values?alt=json';
	'https://sheets.googleapis.com/v4/spreadsheets/1pKeMnD2BjY_BIPKFWaTPWBm4p0BI9_VVH3pAUiH50Z8/values/Sheet1';

fetch(url)
	.then((resp) => resp.json())
	.then((json) => {
		json.feed.entry.forEach((ent) => {
			console.log(ent);
			// making project div
			const $div = $('<div>').addClass('project');
			$('.projects').append($div);
			// making first row
			const $first_row = $('<div>').addClass('first-row');
			$($div).append($first_row);
			// title, gradient, label
			const $title = $('<div>');
			$title.text(ent.gsx$title.$t).addClass('title');
			const $gradient = $('<div>').addClass('gradient');
			$($first_row).append($title);
			$($first_row).append($gradient);
			const $gradient_img = $('<img>');
			$gradient_img.attr('src', ent.gsx$gradient.$t).addClass('gradient-img');
			$($gradient).append($gradient_img);
			// making second row
			const $second_row = $('<div>').addClass('second-row');
			$($div).append($second_row);

			//links
			const $links = $('<div>').addClass('p-links');
			$($second_row).append($links);
			// deployed links and repo links
			const $project_links = $('<div>').addClass('project-links');
			$($links).append($project_links);
			const $d_frontend = $('<div>').addClass('d-frontend');
			$($project_links).append($d_frontend);
			const $frontend_link = $('<a>')
				.text('View Project')
				.attr('href', ent.gsx$deployedfrontend.$t);
			$($d_frontend).append($frontend_link);
			const $repo_links = $('<div>').addClass('repo-links');
			$($project_links).append($repo_links);
			const $r_frontend = $('<div>').addClass('frontend');
			const $frontend_repo_link = $('<a>')
				.text('Frontend Repo')
				.attr('href', ent.gsx$repofrontend.$t);
			$($r_frontend).append($frontend_repo_link);
			const $r_backend = $('<div>').addClass('backend');
			if (ent.gsx$repobackend.$t) {
				const $backend_repo_link = $('<a>')
					.text('Backend Repo')
					.attr('href', ent.gsx$repobackend.$t);
				$($r_backend).append($backend_repo_link);
			}
			$($repo_links).append($r_frontend);
			$($repo_links).append($r_backend);

			// making third row
			const $third_row = $('<div>').addClass('third-row');
			$($div).append($third_row);
			// right panel
			const $right_panel = $('<div>').addClass('right-panel');
			$($third_row).append($right_panel);
			// project description
			const $proj_desc = $('<div>')
				.text(ent.gsx$description.$t)
				.addClass('project-desc');
			$($right_panel).append($proj_desc);
			// skills
			const $skills = $('<div>')
				.text(ent.gsx$skills.$t)
				.addClass('project-skills');
			$($right_panel).append($skills);

			// project image
			const $proj_img = $('<div>').addClass('project-image');
			$($third_row).append($proj_img);
			const $image = $('<img>').attr('src', ent.gsx$image.$t);
			$($proj_img)
				.append($image)
				.wrap($('<a>').attr('href', ent.gsx$deployedfrontend.$t));
		});
	})
	.then(() => console.log('go back to the Elements tab'));
