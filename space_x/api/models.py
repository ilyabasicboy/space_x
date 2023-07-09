from django.db import models


class MenuItem(models.Model):

    class Meta:
        verbose_name = u'пункт меню'
        verbose_name_plural = u'пункты меню'
        ordering = ['order_key']

    order_key = models.PositiveIntegerField(
        verbose_name=u'',
        default=0,
        blank=False, null=False
    )
    show = models.BooleanField(
        verbose_name=u'Отображать',
        default=True
    )
    name = models.CharField(
        verbose_name=u'Название пункта',
        max_length=255
    )
    url = models.CharField(
        verbose_name=u'url',
        max_length=255
    )

    def __str__(self):
        return self.name


class Advantage(models.Model):

    class Meta:
        verbose_name = u'преимущество'
        verbose_name_plural = u'преимущества'
        ordering = ['order_key']

    order_key = models.PositiveIntegerField(
        verbose_name=u'',
        default=0,
        blank=False, null=False
    )
    show = models.BooleanField(
        verbose_name=u'Отображать',
        default=True
    )
    top_subtitle = models.CharField(
        verbose_name=u'подзаголовок сверху',
        max_length=255
    )
    title = models.CharField(
        verbose_name=u'основной заголовок',
        max_length=255
    )
    bottom_subtitle = models.CharField(
        verbose_name=u'подзаголовок снизу',
        max_length=255
    )

    def __str__(self):
        return '%s %s %s' % (self.top_subtitle, self.title, self.bottom_subtitle)