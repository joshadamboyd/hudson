<?php get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if (have_posts()) : ?>
			<header class="page-header">
				<h1 class="page-title"><?php printf(__('Search Results for: %s', 'wp_hudson'), get_search_query()); ?></h1>
			</header>

			<?php
			while (have_posts()) : the_post(); ?>

				<?php
				get_template_part( 'content', 'search' );

			endwhile;

			the_posts_pagination(array(
				'prev_text'          => __('Previous page', 'wp_hudson'),
				'next_text'          => __('Next page', 'wp_hudson'),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __('Page', 'wp_hudson') . ' </span>',
			));

		else :
			get_template_part('content', 'none');
		endif;
		?>

		</main>
	</section>

<?php get_footer(); ?>
