	</div>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<?php
				do_action('hudson_credits');
			?>
			<a href="<?php echo esc_url(__('https://wordpress.org/', 'wp_hudson')); ?>"><?php printf(__('Proudly powered by %s', 'wp_hudson'), 'WordPress'); ?></a>
		</div>
	</footer>

</div>

<?php wp_footer(); ?>

</body>
</html>
