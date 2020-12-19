from django.apps import AppConfig


class TransactionItemsConfig(AppConfig):
    name = 'transaction_items'

    def ready(self):
        import transaction_items.signals
