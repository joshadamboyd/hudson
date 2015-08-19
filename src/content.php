<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
		hudson_post_thumbnail();
	?>

	<header class="entry-header">
		<?php
			if (is_single()) :
				the_title('<h1 class="entry-title">', '</h1>');
			else :
				the_title(sprintf('<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url(get_permalink())), '</a></h2>');
			endif;
		?>
	</header>

	<div class="entry-content">
		<?php
			the_content(sprintf(
				__('Continue reading %s', 'wp_hudson'),
				the_title('<span class="screen-reader-text">', '</span>', false)
			));

			wp_link_pages(array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . __('Pages:', 'wp_hudson') . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . __('Page', 'wp_hudson') . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			));
		?>
	</div>

	<?php
		if (is_single() && get_the_author_meta('description')) :
			get_template_part('author-bio');
		endif;
	?>

	<footer class="entry-footer">
		<?php hudson_entry_meta(); ?>
		<?php edit_post_link(__('Edit', 'wp_hudson'), '<span class="edit-link">', '</span>'); ?>
	</footer>

</article>
