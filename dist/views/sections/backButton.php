<?php 
	$inverted = '';
	$dayPart === 'night' && $inverted = ' inverted'; 
?>

<div class="backButton">
	<a class="backButton__button<?php echo $inverted; ?>" href="/">
		<span class="backButton__icon"><?php include('resources/svg/arrow--left.svg'); ?></span>
		<span class="backButton__label">Plus de conseils</span>
	</a>
</div>
